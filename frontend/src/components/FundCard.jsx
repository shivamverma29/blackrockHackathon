// src/components/FundCard.js
import React, { useState } from 'react';

const FundCard = ({ image, title, description, ethAmount, dollarAmount, targetEth, targetDollar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', gender: '', amount: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeModal();
      setFormData({ name: '', gender: '', amount: '' });
    }, 2000);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg m-4 w-60">
      <img src={image} alt={title} className="w-full h-36 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="font-bold text-gray-800">{ethAmount} ETH</p>
        <p className="text-gray-600">(${dollarAmount})</p>
        <p className="text-gray-600">target of {targetEth} ETH <br />(${targetDollar})</p>
      </div>
      <button
        onClick={openModal}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center mx-auto"
      >
        Raise Fund
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg w-80 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500">X</button>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-4">Raise Fund</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Amount to Fund</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-blue-700 text-white rounded-lg p-2">Submit</button>
              </form>
            ) : (
              <p className="text-green-500 text-center">Funded Successfully!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FundCard;
