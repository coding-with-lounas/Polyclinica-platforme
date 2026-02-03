import React from 'react';
import { wilayas } from './mocks';

const WilayaList = () => {
  return (
    <div 
      className="absolute top-[470px] left-[147px] z-40 w-40 min-w-28 max-w-72 max-h-[400px] mt-[65px] rounded-2xl bg-white shadow-lg border border-gray-200 flex flex-col overflow-hidden"
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        userSelect: 'none',
        WebkitUserSelect: 'none'
      }}
    >
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="font-sans text-base font-semibold text-gray-800 m-0">
          Select Wilaya
        </h3>
      </div>
      
      <div 
        className="flex-1 overflow-y-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#c1c1c1 #f1f1f1'
        }}
      >
        <style>
          {`
            .wilaya-list-scroll::-webkit-scrollbar {
              width: 6px;
            }
            .wilaya-list-scroll::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 3px;
            }
            .wilaya-list-scroll::-webkit-scrollbar-thumb {
              background: #c1c1c1;
              border-radius: 3px;
            }
            .wilaya-list-scroll::-webkit-scrollbar-thumb:hover {
              background: #a8a8a8;
            }
          `}
        </style>
        
        <div className="wilaya-list-scroll">
          {wilayas.map((wilaya, index) => (
            <div 
              key={index} 
              className={`
                flex items-center justify-between px-5 py-3.5 border-b border-gray-50 
                cursor-pointer transition-all duration-200 ease-in-out bg-white
                hover:bg-blue-50 hover:pl-6 active:bg-blue-100 active:scale-[0.99]
                ${wilaya.name === "Tipaza" ? "bg-blue-50 border-l-3 border-l-blue-600 hover:bg-blue-100" : ""}
                last:border-b-0
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-[-2px]
              `}
              data-special={wilaya.name === "Tipaza" ? "true" : undefined}
            >
              <span className={`
                font-sans text-sm font-normal text-gray-800 transition-all duration-200 ease-in-out
                group-hover:text-blue-600 group-hover:font-medium
              `}>
                {wilaya.name}
              </span>
              <div className="text-lg text-gray-400 opacity-0 -translate-x-1.5 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue-600">
                ›
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WilayaList;