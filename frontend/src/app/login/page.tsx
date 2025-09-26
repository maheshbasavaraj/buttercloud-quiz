'use client';

import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('appToken');
    if (token) {
      router.push('/scenarios'); // Redirect to scenarios if already logged in
    }
  }, [router]);

  const handleGoogleSuccess = async (credentialResponse: any) => { // credentialResponse contains id_token
    console.log('Google credentialResponse:', credentialResponse); // Debugging line
    // Send the Google ID token to your backend
    const res = await fetch('http://localhost:3001/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: credentialResponse.credential }), // id_token is in credentialResponse.credential
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('appToken', data.token); // Store your app's JWT
      localStorage.setItem('user', JSON.stringify(data.user)); // Store user info
      router.push('/scenarios'); // Redirect to a protected page
    } else {
      console.error('Backend authentication failed');
      alert('Login failed. Please try again.');
    }
  };

  const handleGoogleError = () => {
    console.log('Google Login Failed');
    alert('Google login failed. Please try again.');
  };

  return (
    <main className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Login to ButterCloud Quiz</h1>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        useOneTap
      />
    </main>
  );
}
