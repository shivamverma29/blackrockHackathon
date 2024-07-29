import React from 'react';
import FundCard from './FundCard';

const fundData = [
  {
    image: 'https://i.ytimg.com/vi/XyP1ZC4kYHs/sddefault.jpg', // Replace with actual image URL
    title: 'Covid Relief Fund',
    description: 'by 0x5d7676dB6...',
    ethAmount: '3.12',
    dollarAmount: '8568.77',
    targetEth: '11989',
    targetDollar: '32954053.60',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oh0CkrSq15I80Obb_crTIn473Scwzq0eSA&s', // Replace with actual image URL
    title: 'Oxygen Crisis in India',
    description: 'by 0x877a234b89...',
    ethAmount: '1.1',
    dollarAmount: '3021.04',
    targetEth: '20',
    targetDollar: '54928.00',
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/5df1ef804eeb864a51338974/c18cd4ca-0f6b-4293-ba44-7f0eb8aae1ee/Presentation+image.jpg?format=1000w', // Replace with actual image URL
    title: 'Forest Conservation',
    description: 'by 0x877a234b89...',
    ethAmount: '4.1',
    dollarAmount: '5021.04',
    targetEth: '20',
    targetDollar: '54928.00',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KoKimwnMe58sbI5L80J7pBpU6LDzcdGQCg&s', // Replace with actual image URL
    title: 'Breath India',
    description: 'by 0x877a234b89...',
    ethAmount: '8.1',
    dollarAmount: '2021.04',
    targetEth: '20',
    targetDollar: '54928.00',
  },
  {
    image: 'https://i.ytimg.com/vi/XyP1ZC4kYHs/sddefault.jpg', // Replace with actual image URL
    title: 'Covid Relief Fund',
    description: 'by 0x5d7676dB6...',
    ethAmount: '3.12',
    dollarAmount: '8568.77',
    targetEth: '11989',
    targetDollar: '32954053.60',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oh0CkrSq15I80Obb_crTIn473Scwzq0eSA&s', // Replace with actual image URL
    title: 'Oxygen Crisis in India',
    description: 'by 0x877a234b89...',
    ethAmount: '1.1',
    dollarAmount: '3021.04',
    targetEth: '20',
    targetDollar: '54928.00',
  },
];

const Crowd = () => {
  return (
    <div className="font-sans p-8">
      <h1 className="text-2xl font-bold mb-6 mx-auto text-center">Crowd Funding</h1>
      <div className="flex flex-wrap justify-between">
        {fundData.map((fund, index) => (
          <FundCard key={index} {...fund} />
        ))}
      </div>
    </div>
  );
};

export default Crowd;
