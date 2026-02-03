// Données mockées pour les médecins
export const mockDoctors = [
  {
    id: 1,
    name: "Dr. Ahmed Benali",
    specialization: "Cardiologue",
    email: "ahmed.benali@example.com",
    phone: "+213 551 23 45 67",
    address: "Alger Centre, Rue Didouche Mourad",
    rating: 4.8,
    reviews: 12,
    experience: "15 ans d'expérience",
    price: "3000 DZD",
    availability: "Lundi - Vendredi",
    imageUrl: null,
    initials: "AB",
    languages: ["Arabe", "Français"],
    isVerified: true
  },
  {
    id: 2,
    name: "Dr. Fatima Zohra",
    specialization: "Pédiatre",
    email: "fatima.zohra@example.com",
    phone: "+213 661 34 56 78",
    address: "Bab El Oued, Alger",
    rating: 4.9,
    reviews: 89,
    experience: "12 ans d'expérience",
    price: "2500 DZD",
    availability: "Samedi - Jeudi",
    imageUrl: null,
    initials: "FZ",
    languages: ["Arabe", "Français", "Anglais"],
    isVerified: true
  },
  {
    id: 3,
    name: "Dr. Karim Boudiaf",
    specialization: "Dentiste",
    email: "karim.boudiaf@example.com",
    phone: "+213 771 45 67 89",
    address: "Hydra, Alger",
    rating: 4.7,
    reviews: 20,
    experience: "20 ans d'expérience",
    price: "4000 DZD",
    availability: "Tous les jours",
    imageUrl: "https://via.placeholder.com/100",
    initials: "KB",
    languages: ["Arabe", "Français"],
    isVerified: true
  },
  {
    id: 4,
    name: "Dr. Samira Mekki",
    specialization: "Gynécologue",
    email: "samira.mekki@example.com",
    phone: "+213 541 23 45 67",
    address: "El Biar, Alger",
    rating: 4.6,
    reviews: 15,
    experience: "18 ans d'expérience",
    price: "3500 DZD",
    availability: "Dimanche - Jeudi",
    imageUrl: null,
    initials: "SM",
    languages: ["Arabe", "Français"],
    isVerified: true
  },
  {
    id: 5,
    name: "Dr. Mohamed Tounsi",
    specialization: "Généraliste",
    email: "mohamed.t@example.com",
    phone: "+213 651 34 56 78",
    address: "Kouba, Alger",
    rating: 4.5,
    reviews: 98,
    experience: "10 ans d'expérience",
    price: "2000 DZD",
    availability: "Lundi - Samedi",
    imageUrl: null,
    initials: "MT",
    languages: ["Arabe"],
    isVerified: false
  },
  {
    id: 6,
    name: "Dr. Leila Cherif",
    specialization: "Ophtalmologue",
    email: "leila.cherif@example.com",
    phone: "+213 771 56 78 90",
    address: "Ben Aknoun, Alger",
    rating: 4.8,
    reviews: 13,
    experience: "14 ans d'expérience",
    price: "3200 DZD",
    availability: "Mardi - Samedi",
    imageUrl: null,
    initials: "LC",
    languages: ["Arabe", "Français", "Anglais"],
    isVerified: true
  }
];

// Fonction pour trier les médecins
export const sortDoctors = (doctors, criteria = 'rating') => {
  const sorted = [...doctors];
  
  switch(criteria) {
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'experience':{
      // Extraction des années d'expérience
      const getYears = (exp) => parseInt(exp.split(' ')[0]);
      return sorted.sort((a, b) => getYears(b.experience) - getYears(a.experience));
    }
    case 'name':{
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    case 'price':{
      const getPrice = (price) => parseInt(price.split(' ')[0]);
      return sorted.sort((a, b) => getPrice(a.price) - getPrice(b.price));
    }
    default:{
        return sorted;
    }
  }
};

// Exporter par défaut
export default mockDoctors;