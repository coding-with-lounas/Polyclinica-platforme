import Vector from '../assets/Vector.svg'
import date from '../assets/Date.svg'
import searchclinique from '../assets/searchClinique.svg'
import VectorLf from '../assets/VectorLf.svg';
import VectorLr from '../assets/VectorLr.svg';


const HowItWorks = () => {
  

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Comment ça marche ?</h2>

        <div className="grid grid-rows-3 gap-8">
        <div className="bg-white p-6  hover:shadow-lg transition flex gap-4" >
             <div className="flex">
              <p className="flex items-center justify-center rounded-full bg-[#0FDCBC] w-[54px] h-[54px] text-white font-bold">1</p>
              <div className="flex-1">
              <h3 className="text-xl font-bold mx">Recherchez votre clinique <br /> ou cabinet médical</h3>
              <p className="text-gray-600">Entrez simplement le nom de la clinique ou du <br/>  médecin que vous recherchez et choisissez  <br/> celui qui vous convient le mieux.
</p>
              </div>
              </div>

            
              <img src={searchclinique} alt='Clinique' className="w-[198px] h-[heigh] mx-auto mb-4" />
              </div>

              {/* the left line one */}
          <img src={VectorLf} alt="line left" className="w-full" />

              <div className="bg-white p-6  hover:shadow-lg transition flex gap-4" >
              <img src={date} alt='Calendar' className="w-[198px] h-[heigh] mx-auto mb-4" />
             <div className="flex">
              <div className="flex-1">
              <h3 className="text-xl font-bold mx">Prenez rendez-vous en ligne</h3>
              <p className="text-gray-600"> Sélectionnez la date et l’heure qui vous <br/> conviennent. Finalisez votre demande de rendez- <br/> vous en ligne et recevez une notification dès que <br/> celui-ci est confirmé par l’établissement.</p>
              </div>
              <p className="flex items-center justify-center rounded-full bg-[#0FDCBC] w-[54px] h-[54px] text-white font-bold">2</p>

              </div>
              </div>
          <img src={VectorLr} alt="line left" className="w-full" />

            <div className="bg-white p-6  hover:shadow-lg transition flex gap-4" >
             <div className="flex">
              <p className="flex items-center justify-center rounded-full bg-[#0FDCBC] w-[54px] h-[54px] text-white font-bold">3</p>
              <div className="flex-1">
              <h3 className="text-xl font-bold mx">Confirmez votre présence</h3>
              <p className="text-gray-600">Recevez un rappel automatique trois jours avant <br /> votre rendez-vous. Confirmez votre présence en <br />un clic pour garantir votre créneau et permettre à <br /> l’établissement de mieux organiser son planning.</p>
              </div>
              </div>
              <img src={Vector} alt='confirmation' className="w-[198px] h-[heigh] mx-auto mb-4" />

              </div>
        </div>
      </div>
      <div class="line"></div>
    </section>
  
  );
};

export default HowItWorks;
