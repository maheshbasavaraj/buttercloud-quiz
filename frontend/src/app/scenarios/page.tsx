'use client';

import { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';

export default function ScenariosPage() {
  const [scenarios, setScenarios] = useState<any[]>([]);
  const [level, setLevel] = useState('');
  const [availableLevels, setAvailableLevels] = useState<string[]>([]);
  const router = useRouter();

  // Fetch scenarios and set available levels
  useEffect(() => {
    async function getScenarios() {
      const token = localStorage.getItem('appToken');
      if (!token) {
        router.push('/login');
        return;
      }
      const res = await fetch('/api/scenarios', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error('Failed to fetch scenarios');
      }
      const data = await res.json();
      setScenarios(data);

      // Dynamically get unique levels and sort them
      const uniqueLevels: string[] = Array.from(new Set(data.map((s: any) => s.difficulty.toLowerCase())));
      const customOrder = ['noob', 'noob-intermediate', 'amateur', 'fresher', 'intermediate', 'intermediate-advanced', 'senior', 'advanced'];
      uniqueLevels.sort((a: string, b: string) => customOrder.indexOf(a) - customOrder.indexOf(b));
      setAvailableLevels(uniqueLevels);
    }
    getScenarios();
  }, [router]);

  // Redirect user when a level is selected
  useEffect(() => {
    if (level) {
      const firstScenario = scenarios.find(s => s.difficulty.toLowerCase() === level);
      if (firstScenario) {
        router.push(`/scenarios/${firstScenario.id}`);
      }
    }
  }, [level, scenarios, router]);

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl font-bold">Select a Difficulty</h1>
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <RadioGroup value={level} onValueChange={setLevel} className="flex flex-wrap justify-center gap-4">
          {availableLevels.map(l => (
            <div key={l}>
              <RadioGroupItem value={l} id={l} className="sr-only" />
              <Label 
                htmlFor={l} 
                className="capitalize block p-4 border rounded-lg cursor-pointer hover:bg-secondary transition-colors"
              >
                {l}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </main>
  );
}