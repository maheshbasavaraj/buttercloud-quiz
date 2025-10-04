'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { getFriendlyComponentName } from '@/app/scenarios/[id]/quiz/page'; // Import the helper

export default function ResultPage() {
  const params = useParams();
  const { id: scenarioId, submissionId } = params;
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!submissionId) return;

    async function getResult() {
      try {
        setLoading(true);
        const res = await fetch(`/api/submissions/${submissionId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch submission results');
        }
        const data = await res.json();
        setResult(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getResult();
  }, [submissionId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">Loading Results...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold text-destructive">Error: {error}</div>
      </div>
    );
  }

  if (!result) return null;

  const { submission, scenario } = result;

  return (
    <main className="container mx-auto p-4">
      <Card className="bg-card text-card-foreground animate-fade-in border-primary/20 border">
        <CardHeader>
          <CardTitle className="text-3xl">Results for: {scenario.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-8">
            <p className="text-5xl font-extrabold text-primary">Score: {submission.score}</p>
          </div>
          <div className="mt-6 space-y-6">
            <h3 className="text-3xl font-bold text-center">Detailed Feedback</h3>
            <ul className="space-y-6">
              {Object.entries(submission.feedback).map(([componentType, feedback]: [string, any]) => {
                const ratingStyles: { [key: string]: { icon: React.ReactNode, color: string } } = {
                  'Best': { icon: <CheckCircle className="inline-block mr-2 h-5 w-5" />, color: 'text-green-500' },
                  'Good': { icon: <CheckCircle className="inline-block mr-2 h-5 w-5" />, color: 'text-sky-500' },
                  'Acceptable': { icon: <AlertTriangle className="inline-block mr-2 h-5 w-5" />, color: 'text-yellow-500' },
                  'Poor': { icon: <XCircle className="inline-block mr-2 h-5 w-5" />, color: 'text-red-500' },
                };
                const style = ratingStyles[feedback.rating] || ratingStyles['Poor'];

                return (
                  <li key={componentType} className="p-5 bg-secondary/50 rounded-lg shadow-sm border border-border/50">
                    <h4 className="text-xl font-bold mb-2">{getFriendlyComponentName(componentType)}</h4>
                    <div className="mb-2">
                      <span className="font-semibold text-foreground">Your Selection: </span>
                      <span className="text-muted-foreground">{feedback.selectedOptionLabel}</span>
                    </div>
                    <div className={`flex items-center mb-2 ${style.color}`}>
                      {style.icon}
                      <span className="font-semibold text-lg">Rating: {feedback.rating}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{feedback.justification}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-6 border-t border-border/50 pt-6 flex justify-end">
            <Link href="/scenarios">
              <Button>Back to Scenarios</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
