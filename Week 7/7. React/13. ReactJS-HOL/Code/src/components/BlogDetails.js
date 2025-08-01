import React from 'react';

export function BlogDetails() {
  const posts = [
    {
      id: 1,
      title: 'React Learning',
      author: 'Stephen Biz',
      excerpt: 'Welcome to learning React!'
    },
    {
      id: 2,
      title: 'Installation',
      author: 'Schewzdenier',
      excerpt: 'You can install React from npm.'
    }
  ];

  return (
    <div className="column">
      <h2>Blog Details</h2>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            {p.title}
            <ul>
              <li>Author: {p.author}</li>
              <li>{p.excerpt}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
