'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

interface LeaderboardEntry {
  id: string;
  name: string;
  overallScore: number;
}

export default function LeaderboardPage() {
  const router = useRouter();

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      const token = localStorage.getItem('appToken');
      if (!token) {
        router.push('/login'); // Redirect to login if no token
        return;
      }
      const res = await fetch('http://localhost:3001/leaderboard', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        console.error('Failed to fetch leaderboard');
        return;
      }
      const data: LeaderboardEntry[] = await res.json();
      setLeaderboard(data);
    }

    fetchLeaderboard();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('appToken');
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out">
          Logout
        </button>
      </div>
      {leaderboard.length === 0 ? (
        <p>No scores yet. Complete some quizzes to see the leaderboard!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Rank</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Overall Score</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-200 text-sm font-light">
              {leaderboard.map((entry, index) => (
                <tr key={entry.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                  <td className="py-3 px-6 text-left">{entry.name}</td>
                  <td className="py-3 px-6 text-left">{entry.overallScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-6">
        <Link href="/scenarios" className="text-blue-500 hover:underline">
          Back to Scenarios
        </Link>
      </div>
    </main>
  );
}
