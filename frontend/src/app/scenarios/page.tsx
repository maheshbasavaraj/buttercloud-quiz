'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ScenariosPage() {
  const [scenarios, setScenarios] = useState<any[]>([]);
  const [filteredScenarios, setFilteredScenarios] = useState<any[]>([]);
  const [level, setLevel] = useState('all');

  useEffect(() => {
    async function getScenarios() {
      const res = await fetch('http://localhost:3001/scenarios');
      if (!res.ok) {
        throw new Error('Failed to fetch scenarios');
      }
      const data = await res.json();
      console.log(data);
      setScenarios(data);
      setFilteredScenarios(data);
    }
    getScenarios();
  }, []);

  useEffect(() => {
    if (level === 'all') {
      setFilteredScenarios(scenarios);
    } else {
      setFilteredScenarios(scenarios.filter(s => s.difficulty.toLowerCase() === level));
    }
  }, [level, scenarios]);

  const levels = ['all', 'noob', 'amateur', 'fresher', 'senior'];

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Scenarios</h1>
        <div className="flex items-center space-x-4">
          <Label>Difficulty:</Label>
          <RadioGroup value={level} onValueChange={setLevel} className="flex space-x-4">
            {levels.map(l => (
              <div key={l} className="flex items-center space-x-2">
                <RadioGroupItem value={l} id={l} />
                <Label htmlFor={l} className="capitalize">{l}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <ul className="space-y-3">
          {filteredScenarios.map((scenario: any) => (
            <li key={scenario.id}>
              <Link href={`/scenarios/${scenario.id}`} className="block p-4 bg-secondary/50 rounded-lg border border-transparent hover:border-primary/50 transition-colors hover:bg-secondary">
                <h2 className="text-xl font-semibold text-primary-foreground">{scenario.title}</h2>
                <p className="text-sm text-muted-foreground">{scenario.difficulty}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}