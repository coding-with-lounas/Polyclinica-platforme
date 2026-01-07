import Vector from "../assets/Vector.svg";
import date from "../assets/Date.svg";
import searchclinique from "../assets/searchClinique.svg";
import VectorLf from "../assets/VectorLf.svg";
import VectorLr from "../assets/VectorLr.svg";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-20">Comment ça marche ?</h2>

        <div className="flex flex-col gap-32 md:gap-32 relative">
          
          {/* --- STEP 1 --- */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <div className="flex gap-4 items-start text-left flex-1">
              {/* Circle 1 */}
              <p className="flex items-center justify-center rounded-full bg-[#0FDCBC] w-[54px] h-[54px] text-white font-bold shrink-0 shadow-sm">
                1
              </p>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003d2d]">
                  Recherchez votre clinique <br className="hidden md:block" /> ou cabinet médical
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Entrez simplement le nom de la clinique ou du médecin
                  que vous recherchez et choisissez celui qui vous
                  convient le mieux.
                </p>
              </div>
            </div>
            <img src={searchclinique} alt="Clinique" className="w-[180px] h-auto hidden md:block" />

            {/* LINE 1 (VectorLf): Starts from Circle 1 to Circle 2 */}
            <img 
              src={VectorLf} 
              alt="" 
              className="absolute top-[54px] buttom-[10px] left-[27px] w-[calc(100%-54px)] hidden md:block pointer-events-none -z-10 translate-y-2" 
            />
          </div>

          {/* --- STEP 2 --- */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8 z-10">
            <div className="flex gap-4 items-start text-right flex-1 justify-end">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003d2d]">Prenez rendez-vous en ligne</h3>
                <p className="text-gray-600 max-w-sm ml-auto">
                  Sélectionnez la date et l’heure qui vous conviennent. 
                  Finalisez votre demande de rendez-vous en ligne et 
                  recevez une notification dès confirmation.
                </p>
              </div>
              {/* Circle 2 */}
              <p className="flex items-center justify-center rounded-full bg-[#0FDCBC] w-[54px] h-[54px] text-white font-bold shrink-0 shadow-sm">
                2
              </p>
            </div>
            <img src={date} alt="Calendar" className="w-[180px] h-auto hidden md:block" />

            {/* LINE 2 (VectorLr): Starts from Circle 2 down to Circle 3 */}
            <img 
              src={VectorLr} 
              alt="" 
              className="absolute top-[54px] right-[27px] w-[calc(100%-54px)] hidden md:block pointer-events-none -z-10 translate-y-2" 
            />
          </div>

          {/* --- STEP 3 --- */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <div className="flex gap-4 items-start text-left flex-1">
              {/* Circle 3 */}
              <p className="flex items-center justify-center rounded-full bg-[#0FDCBC] w-[54px] h-[54px] text-white font-bold shrink-0 shadow-sm">
                3
              </p>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#003d2d]">Confirmez votre présence</h3>
                <p className="text-gray-600 max-w-sm">
                  Recevez un rappel automatique trois jours avant votre
                  rendez-vous. Confirmez votre présence en un clic pour 
                  garantir votre créneau.
                </p>
              </div>
            </div>
            <img src={Vector} alt="confirmation" className="w-[180px] h-auto hidden md:block" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;