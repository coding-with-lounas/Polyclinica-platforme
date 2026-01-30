import React from 'react';
import './SuccessMessage.css';

const SuccessMessageSimple = () => {
  return (
    <div className="Success">
        <i class="bi bi-check-circle-fill text-2xl text-green-500"></i>
        <div>
        <h2 className="text-l text-green-500 ml-2">Votre rendez-vous est enregistré !</h2>
        <span className="text-xs text-green-500">Un e-mail/SMS de confirmation vous sera envoyé prochainement.</span>
        </div>
    </div>
    
  );
};

export default SuccessMessageSimple;