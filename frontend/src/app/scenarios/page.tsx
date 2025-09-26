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
import { useRouter } from 'next/navigation';

export default function ScenariosPage() {
  const [scenarios, setScenarios] = useState<any[]>([]);
  const [filteredScenarios, setFilteredScenarios] = useState<any[]>([]);
  const [level, setLevel] = useState('all');



  useEffect(() => {
    if (level === 'all') {
      setFilteredScenarios(scenarios);
    } else {
      setFilteredScenarios(scenarios.filter(s => s.difficulty.toLowerCase() === level));
    }
  }, [level, scenarios]);

  const [availableLevels, setAvailableLevels] = useState<string[]>(['all']);

  useEffect(() => {
    async function getScenarios() {
      const token = localStorage.getItem('appToken');
      if (!token) {
        router.push('/login'); // Redirect to login if no token
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
      console.log(data);
      setScenarios(data);
      setFilteredScenarios(data);

      // Dynamically get unique levels
      const uniqueLevels = Array.from(new Set(data.map((s: any) => s.difficulty.toLowerCase())));
      const customOrder = ['noob', 'noob-intermediate', 'amateur', 'fresher', 'intermediate', 'intermediate-advanced', 'senior', 'advanced'];
      uniqueLevels.sort((a, b) => customOrder.indexOf(a) - customOrder.indexOf(b));
      setAvailableLevels(['all', ...uniqueLevels]);
    }
    getScenarios();
  }, []);

  const router = useRouter(); // Add this line

  const handleLogout = () => {
    localStorage.removeItem('appToken');
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Scenarios</h1>
        <div className="flex items-center space-x-4">
          <Link href="/leaderboard" className="text-blue-500 hover:underline">
            Leaderboard
          </Link>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out">
            Logout
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Label>Difficulty:</Label>
          <RadioGroup value={level} onValueChange={setLevel} className="flex space-x-4">
            {availableLevels.map(l => (
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