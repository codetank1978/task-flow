// src/pages/customers/index.js
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import SearchBar from '@/components/common/SearchBar';
import CustomersList from '@/components/customers/CustomersList';

export default function CustomersPage() {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Products', href: '/products' },
    { label: 'All Products', href: '/products' },
  ];
  
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="flex items-center">
            <SearchBar placeholder="Search..." />
            <div className="ml-4">
              <button className="p-2 rounded-full bg-gray-100">
                {/* User profile icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <CustomersList />
      </div>
    </DashboardLayout>
  );
}