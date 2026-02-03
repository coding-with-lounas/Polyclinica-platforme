import React from 'react';
import { AppContext } from '../../context/appContext';

const DoctorCard = ({
  doctor = {
    initials: "OM",
    name: "Dr. Alison Ogaga",
    specialization: "Dentiste",
    email: "hello@luxi.com",
    phone: "+123 456 78 91",
    address: "Place Upside Down",
    rating: 4.2,
    reviews: 56,
    imageUrl: null // Can be provided or use initials as fallback
  },
  onBookAppointment = () => console.log('Book appointment clicked')
}) => {
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex items-center gap-1 mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-lg text-yellow-400">★</span>
        ))}
        {hasHalfStar && (
          <span className="relative text-lg text-yellow-400">
            ★
            <span className="absolute left-0 text-gray-300 -z-10">☆</span>
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-lg text-gray-300">☆</span>
        ))}
        <span className="ml-2 text-sm text-gray-600 font-medium">
          {rating.toFixed(1)} ({doctor.reviews} avis)
        </span>
      </div>
    );
  };

  const {handleForm} = React.useContext(AppContext);

  return (
    <div className="w-[568px] h-[226px] opacity-100 border border-gray-300 rounded-[15px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative p-6 box-border animate-[fadeIn_0.6s_ease-out] flex gap-6">
      {/* Doctor Image / Avatar */}
      <div className="flex items-center justify-center w-[120px] h-[120px] rounded-[10%] overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] self-center shadow-[0_8px_20px_rgba(102,126,234,0.3)] flex-shrink-0">
        {doctor.imageUrl ? (
          <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-4xl font-bold text-white font-['-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif]">
            {doctor.initials}
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        {/* Header with name */}
        <h2 className="font-['-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif] text-2xl font-bold text-gray-800 leading-tight mb-4">
          {doctor.name}
        </h2>
        
        {/* Doctor Info - Two columns */}
        <div className="grid grid-cols-2 gap-5 mb-6">
          <div className="flex flex-col gap-3">
            <span className="font-['-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif] text-base font-medium text-gray-900 bg-gray-200 px-3 py-1.5 rounded-full inline-block w-fit">
              {doctor.specialization}
            </span>
            <div className="flex items-center gap-3">
              <i className="bi bi-envelope text-base text-[#667eea] w-5 text-center"></i>
              <span className="text-sm text-gray-600 font-normal">{doctor.email}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <i className="bi bi-telephone text-base text-[#667eea] w-5 text-center"></i>
              <span className="text-sm text-gray-600 font-normal">{doctor.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-geo-alt text-base text-[#667eea] w-5 text-center"></i>
              <span className="text-sm text-gray-600 font-normal">{doctor.address}</span>
            </div>
          </div>
        </div>
        
        {/* Footer with rating and button */}
        <div className="mt-auto flex items-center justify-between">
          <div className="rating-section">
            {renderRatingStars(doctor.rating)}
          </div>
          
          <button 
            className="bg-[#0FDCBC] text-white border-none py-3 px-4 rounded-xl font-['-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif] text-sm font-semibold cursor-pointer flex items-center gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_6px_20px_rgba(102,126,234,0.4)] min-w-[180px] justify-center hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(102,126,234,0.5)] active:translate-y-0 focus:outline focus:outline-2 focus:outline-[rgba(102,126,234,0.5)] focus:outline-offset-2"
            onClick={() => {handleForm();}}
          >
            <i className="bi bi-calendar-plus text-lg"></i>
            Prendre rendez-vous
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 600px) {
          .doctor-card-container {
            width: 90%;
            height: auto;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
            margin: 20px auto;
          }
          
          .avatar-container {
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 15px;
          }
          
          .specialty {
            margin: 0 auto;
          }
          
          .contact-item {
            justify-content: center;
          }
          
          .footer-section {
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-top: 20px;
          }
          
          .rating-stars {
            justify-content: center;
          }
          
          .book-btn {
            width: 100%;
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DoctorCard;