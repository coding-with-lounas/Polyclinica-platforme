import React from 'react';

function Location() {
  return (
    <div >
        <button>
            <div className=" cursor-pointer bg-white text-black/80 rounded-xl w-40 h-14 flex items-center gap-2 px-4 shadow-md absolute top-118 left-1/6 transform -translate-x-1/2 hover:shadow-lg hover:text-black/90 transition duration-70 ">
            <i class="fa-solid fa-location-dot"></i>
            <span>Utiliser ma localisation</span>

            </div>
        </button>
      
    </div>
  );
}   

export default Location;