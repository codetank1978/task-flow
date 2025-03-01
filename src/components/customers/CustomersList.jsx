// src/components/customers/CustomersList.jsx
import React from 'react';

export default function CustomersList() {
  // This would normally fetch data from an API
  const customers = [];
  
  return (
    <div className="p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
        {/* Additional actions could go here */}
      </div>
      <p >View all customers and their orders.</p>
      
      {customers.length > 0 ? (
        <table className="min-w-full mt-8">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                Orders
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                {/* Table cells would go here */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <p className=" mb-4">No customers found.</p>
          <button className="btn btn-neutral">
            Add Customer
          </button>
        </div>
      )}
    </div>
  );
}