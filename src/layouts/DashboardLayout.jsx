// src/layouts/DashboardLayout.jsx
import React from 'react';
import SideBar from '@/components/common/SideBar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
        <main className="flex-1 p-6">
          {children}
        </main>
    </div>

  );
}