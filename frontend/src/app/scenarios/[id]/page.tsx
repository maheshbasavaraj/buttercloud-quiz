'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Helper component for displaying requirement cards
const RequirementCard = ({ title, items }: { title: string, items: any }) => {
  if (!items || (Array.isArray(items) && items.length === 0)) return null;

  let content;
  if (Array.isArray(items)) {
    content = (
      <div className="space-y-2">
        {items.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    );
  } else if (typeof items === 'object' && items !== null) {
    content = (
      <div className="space-y-2">
        {Object.entries(items).map(([key, value]) => (
          <p key={key}><strong>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:</strong> {String(value)}</p>
        ))}
      </div>
    );
  } else {
    content = <p>{items}</p>;
  }

  return (
    <Card className="bg-secondary/50 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
};

export default function ScenarioPage({ params }: { params: { id: string } }) {
  const [scenario, setScenario] = useState<any>(null);

  // Fetch the current scenario
  useEffect(() => {
    async function getScenario() {
      const res = await fetch(`/api/scenarios/${params.id}`);
      if (!res.ok) throw new Error('Failed to fetch scenario');
      const data = await res.json();
      setScenario(data);
    }
    getScenario();
  }, [params.id]);

  if (!scenario) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  const parsedDescription = typeof scenario.description === 'string' 
    ? JSON.parse(scenario.description) 
    : scenario.description;

  return (
    <main className="container mx-auto p-4">
      <Card className="bg-card text-card-foreground border-primary/20 border-2">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">{scenario.title}</CardTitle>
          {parsedDescription.summary && 
            <CardDescription className="text-lg">{parsedDescription.summary}</CardDescription>
          }
        </CardHeader>
        <CardContent className="space-y-8">
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(parsedDescription).map(([key, value]) => {
              if (key === 'summary') return null; // Don't render summary as a requirement card
              const title = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
              return <RequirementCard key={key} title={title} items={value} />;
            })}
          </div>

          <div className="border-t border-border/50 pt-8 flex justify-center">
            <Link href={`/scenarios/${params.id}/quiz`}>
              <Button size="lg">Start Quiz</Button>
            </Link>
          </div>

        </CardContent>
      </Card>
    </main>
  );
}