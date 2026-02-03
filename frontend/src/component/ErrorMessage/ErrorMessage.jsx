import React from 'react';

const ErrorMessageSimple = () => {
  return (
    <div className="w-[551px] h-[60px] rounded-[15px] gap-2 opacity-100 p-4 text-red-500 border border-red-500 flex flex-row items-center justify-center fixed bottom-5 right-5 z-[1000] bg-red-50">
      <i className="bi bi-x-circle-fill text-2xl text-red-500"></i>
      <div>
        <h2 className="text-l text-red-500 ml-2">
          Une erreur technique est survenue. Veuillez réessayer plus tard.
        </h2>
      </div>
    </div>
  );
};

export default ErrorMessageSimple;