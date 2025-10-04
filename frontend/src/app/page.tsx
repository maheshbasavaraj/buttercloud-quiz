'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

interface LeaderboardEntry {
  id: string;
  name: string;
  overallScore: number;
}

export default function Home() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leaderboard`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: LeaderboardEntry[] = await res.json();
        setLeaderboard(data);
      } catch (e: any) {
        setError(e.message);
        console.error("Failed to fetch leaderboard:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboard();
  }, []);

  return (
    <main className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] p-4 gap-8">
      {/* Left Column: Welcome Message and Start Quiz Button */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-6">
          Welcome to StackArchitect Quiz
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          Test your knowledge on various software engineering scenarios and climb the leaderboard!
        </p>
        <Link href="/scenarios" passHref>
          <Button size="lg" className="text-lg px-8 py-4">Start Quiz</Button>
        </Link>
      </div>

      {/* Right Column: Leaderboard */}
      <div className="w-full lg:w-1/3 bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-3xl font-bold mb-6 text-center">Leaderboard</h2>
        {loading && <p className="text-center">Loading leaderboard...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {!loading && !error && leaderboard.length === 0 && (
          <p className="text-center">No entries yet. Be the first to play!</p>
        )}
        {!loading && !error && leaderboard.length > 0 && (
          <ol className="space-y-3">
            {leaderboard.map((entry, index) => (
              <li key={entry.id} className="flex justify-between items-center bg-secondary/50 p-3 rounded-md">
                <span className="font-semibold">{index + 1}. {entry.name}</span>
                <span className="text-lg font-bold text-primary">{entry.overallScore}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </main>
  );
}
