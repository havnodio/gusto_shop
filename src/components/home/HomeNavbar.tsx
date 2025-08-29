import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const HomeNavbar = () => {
  const { session } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-lg">Gusto Club</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">Products</Link>
            <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            {session ? (
              <Button asChild>
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;