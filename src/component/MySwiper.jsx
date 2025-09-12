import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { Pagination, Navigation } from "swiper/modules";
import { Quote } from "lucide-react"; // icon
const testimonials = [
  {
    text: "Recevez un rappel automatique trois jours avant votre rendez-vous. Confirmez votre présence en un clic pour garantir votre créneau et permettre à l’établissement de mieux organiser son planning.",
    name: "Rifki Abdurachman",
    role: "Patient",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "Service excellent, l’équipe est très professionnelle et bien organisée.",
    name: "Amine Benali",
    role: "Patient",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "J’ai beaucoup apprécié la simplicité du système de rendez-vous.",
    name: "Sarah K.",
    role: "Patient",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "Un suivi rapide et des rappels efficaces, je recommande vivement.",
    name: "Mounir Djebbour",
    role: "Patient",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "Le système de prise de rendez-vous est vraiment pratique et intuitif.",
    name: "Fatima Zahra",
    role: "Patiente",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "Très satisfait du service, l’accueil et la communication sont excellents.",
    name: "Karim B.",
    role: "Patient",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "Une organisation impeccable, je n’ai jamais eu de retard dans mes consultations.",
    name: "Leila H.",
    role: "Patiente",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "Tout est clair et bien structuré, ce qui me met en confiance.",
    name: "Nadir K.",
    role: "Patient",
    img: "https://via.placeholder.com/60"
  },
  {
    text: "Le rappel automatique avant le rendez-vous est un vrai plus.",
    name: "Samira T.",
    role: "Patiente",
    img: "https://via.placeholder.com/60"
  }
];

export default function TestimonialSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        className="pb-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-md h-full flex flex-col justify-between">
              <Quote className="text-teal-500 w-8 h-8 mb-4" />
              <p className="text-gray-600 mb-6">{item.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-teal-500">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


// export default function MySwiper() {
//   return (
//     <main>
//         <swiper-container modules={[Scrollbar, Mousewheel]}
//       slidesPerView={3}
//       spaceBetween={20}
//       mousewheel={{ invert: true }}
//       scrollbar={{ draggable: true, clickable: true }}>
//             <swiper-slide>Slide1</swiper-slide>
//             <swiper-slide>Slide2</swiper-slide>
//             <swiper-slide>Slide3</swiper-slide>
//             <swiper-slide>Slide4</swiper-slide>
//             <swiper-slide>Slide5</swiper-slide>
//         </swiper-container>
//     </main>
//   );
// }
