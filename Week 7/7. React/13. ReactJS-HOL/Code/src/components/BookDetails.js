import React from 'react';

export function BookDetails() {
  const books = [
    { id: 1, title: 'Master React',           price: 670 },
    { id: 2, title: 'Deep Dive into Angular', price: 800 },
    { id: 3, title: 'Mongo Essentials',       price: 450 }
  ];

  return (
    <div className="column">
      <h2>Book Details</h2>
      <ul>
        {books.map(b => (
          <li key={b.id}>
            {b.title}
            <ul>
              <li>{b.price}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
