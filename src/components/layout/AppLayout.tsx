import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '@/components/home/HomeNavbar';
import HomeFooter from '@/components/home/HomeFooter';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <HomeFooter />
    </div>
  );
};

export default AppLayout;