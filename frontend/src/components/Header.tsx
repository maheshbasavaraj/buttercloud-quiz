'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider"; // Import useTheme

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setPrimaryHue } = useTheme(); // Use the theme context

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('appToken');
      setIsLoggedIn(!!token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('appToken');
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
      <div className="flex items-center"> {/* Wrap existing elements and new color picker */}
        <a href="/scenarios" className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-secondary/80 mr-4">
          Home
        </a>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4" // Added mr-4 for spacing
          >
            Logout
          </button>
        )}

        {/* Accent Color Picker */}
        <div className="flex space-x-2">
          <Button size="sm" onClick={() => setPrimaryHue(217.2)} className="bg-blue-500 hover:bg-blue-600">Blue</Button>
          <Button size="sm" onClick={() => setPrimaryHue(120)} className="bg-green-500 hover:bg-green-600">Green</Button>
          <Button size="sm" onClick={() => setPrimaryHue(280)} className="bg-purple-500 hover:bg-purple-600">Purple</Button>
          <Button size="sm" onClick={() => setPrimaryHue(30)} className="bg-orange-500 hover:bg-orange-600">Orange</Button>
        </div>
      </div>
    </header>
  );
}
