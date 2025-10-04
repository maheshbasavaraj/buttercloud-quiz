'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const QUIZ_DURATION = 300; // 5 minutes in seconds

// Helper to render a single key-value pair
const renderKeyValue = (key: string, value: any): React.ReactNode => {
  const formattedKey = <span className="font-medium capitalize">{key.replace(/_/g, ' ')}:</span>;

  if (value === null || value === undefined) {
    return <p>{formattedKey} N/A</p>;
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return (
      <p>
        {formattedKey} {String(value)}
      </p>
    );
  }

  if (Array.isArray(value)) {
    return (
      <div>
        {formattedKey}
        <ul className="list-disc list-inside pl-4">
          {value.map((item, index) => (
            <li key={index}>{renderDescription(item)}</li>
          ))}
        </ul>
      </div>
    );
  }

  // If value is an object, recursively render it indented
  if (typeof value === 'object') {
    return (
      <div>
        {formattedKey}
        <div className="pl-4">{renderDescription(value)}</div>
      </div>
    );
  }

  // Fallback for any other unexpected types
  return (
    <p>
      {formattedKey} <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
    </p>
  );
};

// Helper to render the description JSON recursively
const renderDescription = (data: any): React.ReactNode => {
  if (data === null || data === undefined) {
    return null;
  }

  if (typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean') {
    return <p>{String(data)}</p>;
  }

  if (Array.isArray(data)) {
    return (
      <ul className="list-disc list-inside pl-4">
        {data.map((item, index) => (
          <li key={index}>{renderDescription(item)}</li>
        ))}
      </ul>
    );
  }

  if (typeof data === 'object') {
    const entries = Object.entries(data);
    if (entries.length > 0) {
      return (
        <div className="space-y-2">
          {entries.map(([key, value]) => (
            <div key={key}>
              {renderKeyValue(key, value)}
            </div>
          ))}
        </div>
      );
    } else {
      // It's an empty object, or an object with no enumerable properties
      return <p>{}</p>; // Render empty object as empty paragraph
    }
  }

  // Fallback for any other unexpected types, or objects that couldn't be iterated
  return <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>;
};

const getFriendlyComponentName = (componentType: string): string => {
  const mapping: { [key: string]: string } = {
    'q-storage': 'Storage Solution',
    'q-sync': 'Synchronization Strategy',
    'q-extra-monitor-1': 'Monitoring',
    'q-extra-cost-1': 'Cost',
    // Add more mappings as needed
  };

  if (mapping[componentType]) {
    return mapping[componentType];
  }

  // Fallback for unmapped types: clean up the string
  let cleanedName = componentType
    .replace('q-', '')
    .replace('extra-', '')
    .replace(/-\d+$/, '') // Remove trailing -number
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .trim();

  // Capitalize each word
  cleanedName = cleanedName.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return cleanedName;
};

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const { id: scenarioId } = params;
  const [scenario, setScenario] = useState<any>(null);
  const [selections, setSelections] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);

  const handleSubmit = useCallback(async () => {
    try {
      const token = localStorage.getItem('appToken');
      if (!token) {
        router.push('/login');
        return;
      }
      const res = await fetch(`/api/scenarios/${scenarioId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ selections }),
      });
      const data = await res.json();
      if (data.submission?.id) {
        router.push(`/scenarios/${scenarioId}/result/${data.submission.id}`);
      } else {
        console.error("Submission failed, no ID received");
      }
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  }, [scenarioId, selections, router]);

  useEffect(() => {
    if (!scenarioId) return;
    async function getScenario() {
      setLoading(true);
      const token = localStorage.getItem('appToken');
      if (!token) {
        router.push('/login');
        return;
      }
      const res = await fetch(`/api/scenarios/${scenarioId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error('Failed to fetch scenario');
      const data = await res.json();
      setScenario(data);
      setLoading(false);
    }
    getScenario();
  }, [scenarioId, router]);

  useEffect(() => {
    if (loading) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, loading, handleSubmit]);

  const handleSelectionChange = (componentType: string, optionId: string) => {
    setSelections({
      ...selections,
      [componentType]: optionId,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  if (loading || !scenario) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">Loading Quiz...</div>
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="container mx-auto p-4">
      <Card className="bg-card text-card-foreground border-primary/20 border-2">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold text-primary">{scenario.title}</CardTitle>
              <p className="text-muted-foreground">Answer the following questions based on the requirements.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">View Requirements</Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Scenario Requirements</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">{renderDescription(scenario.description)}</div>
                </SheetContent>
              </Sheet>
              <div className={`text-2xl font-bold p-2 rounded-md ${timeLeft < 60 ? 'text-red-500 animate-pulse' : ''}`}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit} className="space-y-8">
            {scenario.components && scenario.components.map((component: any) => {
              const options = typeof component.allowedOptions === 'string' 
                ? JSON.parse(component.allowedOptions).options 
                : component.allowedOptions.options;
              
              return (
                <Card key={component.id} className="bg-secondary/50 animate-fade-in">
                  <CardHeader>
                    <CardTitle>{getFriendlyComponentName(component.componentType)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup onValueChange={(value) => handleSelectionChange(component.componentType, value)}>
                      {options && options.map((option: any) => (
                        <div 
                          key={option.id} 
                          className={`flex items-center space-x-2 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer 
                            ${selections[component.componentType] === option.id ? 'border-2 border-primary bg-primary/20' : ''}`}
                          onClick={() => handleSelectionChange(component.componentType, option.id)}
                        >
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="flex-1 cursor-pointer">{option.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>
              );
            })}
            {scenario.components && scenario.components.length > 0 && (
              <Button type="submit">Submit Answers</Button>
            )}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
