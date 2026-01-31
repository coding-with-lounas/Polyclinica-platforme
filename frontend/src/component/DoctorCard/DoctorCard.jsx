import React from 'react';
import './DoctorCard.css';
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
      <div className="rating-stars">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">☆</span>
        ))}
        <span className="rating-text">{rating.toFixed(1)} ({doctor.reviews} avis)</span>
      </div>
    );
  };

  const {handleForm} = React.useContext(AppContext);

  return (
    <div className="doctor-card">
      {/* Doctor Image / Avatar */}
      <div className="doctor-avatar">
        {doctor.imageUrl ? (
          <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
        ) : (
          <div className="avatar-initials">{doctor.initials}</div>
        )}
      </div>

      <div>
      <h2 className="doctor-name">{doctor.name}</h2>
      {/* Doctor Info */}
      <div className="doctor-info">
        
        <div className="info-section">
          <span className="doctor-specialty">{doctor.specialization}</span>
          <div className="contact-item">
            <i className="bi bi-envelope"></i>
            <span>{doctor.email}</span>
          </div>
        </div>
        
        <div className="info-section">
          
          <div className="contact-item">
            <i className="bi bi-telephone"></i>
            <span>{doctor.phone}</span>
          </div>
          <div className="contact-item">
            <i className="bi bi-geo-alt"></i>
            <span>{doctor.address}</span>
          </div>
        </div>
      </div>
      
      {/* Rating and Action Button */}
      <div className="doctor-side">
        <div className="rating-section">
          {renderRatingStars(doctor.rating)}
        </div>
        
        <button className="book-btn" onClick={() => {handleForm();}}>
          <i className="bi bi-calendar-plus"></i>
          Prendre rendez-vous
        </button>
      </div>
    </div>
      </div>
      
  );
};

export default DoctorCard;