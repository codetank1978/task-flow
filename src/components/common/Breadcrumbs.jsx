// src/components/common/Breadcrumbs.jsx
import React from 'react';
import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul className="flex gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-500">&gt;</span>}
            {item.href ? (
              <Link href={item.href} className="text-gray-500 hover:text-gray-700">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}