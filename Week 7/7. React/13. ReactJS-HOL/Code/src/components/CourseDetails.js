import React from 'react';

export function CourseDetails() {
  const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React',   date: '6/3/2021' }
  ];

  return (
    <div className="column">
      <h2>Course Details</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>
            {c.name}
            <ul>
              <li>{c.date}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
