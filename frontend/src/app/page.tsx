import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>ButterCloud Quiz</h1>
      <Link href="/scenarios">Go to Scenarios</Link>
    </main>
  );
}
