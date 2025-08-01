import React from 'react';
import { OfficeCard } from './OfficeCard';

export const OfficeList = () => {
  const offices = [
    {
      name: 'DBS',
      rent: 50000,
      address: 'MG Road, Bengaluru',
      imageUrl: 'https://www.shutterstock.com/image-photo/blurred-background-spacious-minimalist-coworking-600nw-2541503227.jpg'
    },
    {
      name: ' Innovana Works',
      rent: 80000,
      address: 'Indiranagar 100 Feet Road, Bengaluru',
      imageUrl: 'https://t3.ftcdn.net/jpg/05/79/48/50/360_F_579485026_Fb2LO9GgmNKkOi18LjoBVAk1wUtZG2DE.jpg'
    },
    {
      name: 'SkyHub Offices',
      rent: 68000,
      address: 'Sector V, Kolkata',
      imageUrl: 'https://img.freepik.com/premium-photo/background-modern-business-office_132358-40069.jpg'
    }
  ];

  return (
    <div>
      <h1>Office Space Rental Options</h1>
      {offices.map(office => (
        <OfficeCard key={office.name} office={office} />
      ))}
    </div>
  );
};
