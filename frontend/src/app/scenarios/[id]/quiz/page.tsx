'use client';

import { useState, useEffect } from 'react';
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

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const { id: scenarioId } = params;
  const [scenario, setScenario] = useState<any>(null);
  const [selections, setSelections] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!scenarioId) return;
    async function getScenario() {
      setLoading(true);
      const token = localStorage.getItem('appToken');
      if (!token) {
        router.push('/login'); // Redirect to login if no token
        return;
      }
      const res = await fetch(`http://localhost:3001/scenarios/${scenarioId}`, {
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
  }, [scenarioId]);

  const handleSelectionChange = (componentType: string, optionId: string) => {
    setSelections({
      ...selections,
      [componentType]: optionId,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('appToken');
      if (!token) {
        router.push('/login'); // Redirect to login if no token
        return;
      }
      const res = await fetch(`http://localhost:3001/scenarios/${scenarioId}/submit`, {
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
  };

  if (loading || !scenario) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">Loading Quiz...</div>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <Card className="bg-card text-card-foreground border-primary/20 border-2">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">{scenario.title}</CardTitle>
          <p className="text-muted-foreground">Answer the following questions based on the requirements.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {scenario.components && scenario.components.map((component: any) => {
              const options = typeof component.allowedOptions === 'string' 
                ? JSON.parse(component.allowedOptions).options 
                : component.allowedOptions.options;
              
              return (
                <Card key={component.id} className="bg-secondary/50 animate-fade-in">
                  <CardHeader>
                    <CardTitle>{component.componentType}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup onValueChange={(value) => handleSelectionChange(component.componentType, value)}>
                      {options && options.map((option: any) => (
                        <div key={option.id} className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/50 transition-colors">
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
