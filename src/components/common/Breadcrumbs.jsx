// src/components/common/Breadcrumbs.jsx
import React from 'react';
import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul className="flex gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">&gt;</span>}
            {item.href ? (
              <Link href={item.href} >
                {item.label}
              </Link>
            ) : (
              <span >{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}