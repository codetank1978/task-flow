// src/layouts/DashboardLayout.jsx
import React from 'react';
import SideBar from '@/components/common/SideBar';
import { ThemeProvider } from "@/context/ThemeContext";

export default function DashboardLayout({ children }) {
  return (

    <div className="flex min-h-screen">
      <SideBar />
      <ThemeProvider>
        <main className="flex-1 p-6">
          {children}
        </main>
      </ThemeProvider>
    </div>

  );
}