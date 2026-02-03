import React from 'react';

const SuccessMessageSimple = () => {
  return (
    <div className="w-[469px] h-[97.4px] rounded-[12px] gap-[19.2px] opacity-100 pt-[19.2px] pr-[25.6px] pb-[25.6px] pl-[19.2px] text-green-600 border border-green-600 flex flex-row items-center justify-center fixed bottom-5 right-5 z-[1000] bg-green-50">
      <i className="bi bi-check-circle-fill text-2xl text-green-600"></i>
      <div className="flex flex-col">
        <h2 className="text-l text-green-600 ml-2">Votre rendez-vous est enregistré !</h2>
        <span className="text-xs text-green-600 ml-2">
          Un e-mail/SMS de confirmation vous sera envoyé prochainement.
        </span>
      </div>
    </div>
  );
};

export default SuccessMessageSimple;