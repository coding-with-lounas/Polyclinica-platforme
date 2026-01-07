import React from 'react';

const ProcessFlow = () => {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      {/* 1. The SVG Connector */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Keep it behind the content
          pointerEvents: 'none' // Ensure clicks pass through to buttons/text
        }}
        viewBox="0 0 400 600" // Adjust coordinates based on your layout
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 60 40 C 60 150, 340 150, 340 260 S 60 370, 60 480"
          stroke="#ccc"
          strokeWidth="2"
          strokeDasharray="4 4" // This creates the "dotted" effect
          strokeLinecap="round"
        />
      </svg>

      {/* 2. Your Content Blocks */}
      <div className="step" style={{ padding: '20px', textAlign: 'left' }}>
        <div style={circleStyle}>1</div>
        <p>Recherchez votre clinique...</p>
      </div>

      <div className="step" style={{ padding: '100px 20px', textAlign: 'right' }}>
        <div style={{ ...circleStyle, marginLeft: 'auto' }}>2</div>
        <p>Prenez rendez-vous...</p>
      </div>

      <div className="step" style={{ padding: '20px', textAlign: 'left' }}>
        <div style={circleStyle}>3</div>
        <p>Confirmez votre présence...</p>
      </div>
    </div>
  );
};

const circleStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#16d9b1',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
};

export default ProcessFlow;