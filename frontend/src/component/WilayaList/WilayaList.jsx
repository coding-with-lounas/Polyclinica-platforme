import React from 'react';
import './WilayaList.css';
import { wilayas } from './mocks';

const WilayaList = () => {

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
            <span className="wilaya-text">{wilaya.name}</span>
            <div className="wilaya-arrow">›</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WilayaList;