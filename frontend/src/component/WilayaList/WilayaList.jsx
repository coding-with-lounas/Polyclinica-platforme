import React from 'react';
import './WilayaList.css';

const WilayaList = () => {
  const wilayas = [
    "Wilaya 1",
    "Wilaya 2", 
    "Wilaya 3",
    "Wilaya 4",
    "Wilaya 5",
    "Wilaya 6",
    "Wilaya 7",
    "Wilaya 8",
    "Tipaza",
    "Wilaya 10",
    "Wilaya 11"
  ];

  return (
    <div className="wilaya-container">
      <div className="wilaya-header">
        <h3 className="wilaya-title">Select Wilaya</h3>
      </div>
      
      <div className="wilaya-list">
        {wilayas.map((wilaya, index) => (
          <div 
            key={index} 
            className="wilaya-item"
            data-special={wilaya === "Tipaza" ? "true" : undefined}
          >
            <span className="wilaya-text">{wilaya}</span>
            <div className="wilaya-arrow">›</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WilayaList;