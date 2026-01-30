import React from 'react';
import './ErrorMessage.css';

const ErrorMessageSimple = () => {
  return (
    <div className="Error">
        <i class="bi bi-x-circle-fill text-2xl text-red-500"></i>
        <div>
        <h2 className="text-l text-red-500 ml-2">Une erreur technique est survenue. Veuillez réessayer plus tard .</h2>
        </div>
    </div>
    
  );
};

export default ErrorMessageSimple;