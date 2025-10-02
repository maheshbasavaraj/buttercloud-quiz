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
          <p className="text-4xl font-bold text-primary">Overall Score: {submission.score}</p>
          <div className="mt-6 space-y-4">
            <h3 className="text-2xl font-bold">Feedback:</h3>
            <ul className="space-y-4">
              {Object.entries(submission.feedback).map(([component, feedback]: [string, any]) => {
                const ratingStyles: { [key: string]: { icon: React.ReactNode, color: string } } = {
                  'Best': { icon: <CheckCircle className="inline-block mr-2 h-5 w-5" />, color: 'text-green-500' },
                  'Good': { icon: <CheckCircle className="inline-block mr-2 h-5 w-5" />, color: 'text-sky-500' },
                  'Acceptable': { icon: <AlertTriangle className="inline-block mr-2 h-5 w-5" />, color: 'text-yellow-500' },
                  'Poor': { icon: <XCircle className="inline-block mr-2 h-5 w-5" />, color: 'text-red-500' },
                };
                const style = ratingStyles[feedback.rating] || ratingStyles['Poor'];

                return (
                  <li key={component} className="p-4 bg-secondary/50 rounded-md">
                    <strong className="block text-lg">{component}</strong>
                    <div className="mt-2 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Your Answer: </span>
                      <span>{feedback.selectedOptionLabel}</span>
                    </div>
                    <div className={`mt-2 font-semibold flex items-center ${style.color}`}>
                      {style.icon}
                      <span>{feedback.rating}</span>
                    </div>
                    <p className="mt-1 text-muted-foreground">{feedback.justification}</p>
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
