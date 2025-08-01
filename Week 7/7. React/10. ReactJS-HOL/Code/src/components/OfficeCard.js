import React from 'react';

export const OfficeCard = ({ office }) => {
  // Inline style: rent color based on value
  const rentStyle = {
    color: office.rent > 60000 ? 'green' : 'red',
    fontWeight: 'bold'
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: 12, padding: 12 }}>
      {/* JSX heading is syntactic sugar over React.createElement */}
      <h2>{office.name}</h2>
      <img
        src={office.imageUrl}
        alt={office.name}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p>
        Rent: <span style={rentStyle}>₹{office.rent}</span>
      </p>
      <p>Address: {office.address}</p>
    </div>
  );
};
