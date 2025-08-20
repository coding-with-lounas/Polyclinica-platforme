import React from 'react'

import patient from '../assets/Patient-Department.svg'
import people from '../assets/people-outline.svg'
import home from '../assets/home-hospital.svg'

const OurStat = () => {
  return (
    <div>
    <div className='mt-[200px] flex justify-center gap-[10%]'> 
         <div className='stat-card'>
          <img src={people} alt="logo-clients" />
          <div>+1200 <br /> Utilisateurs </div>
         <p> Plus de 1200 utilisateurs connectés à <br /> leurs cliniques en toute simplicité</p>
         </div>
        <div className='stat-card'>
            <img src={home} alt="Hospital" />
            <div>+100 <br /> Cliniques</div>
          <p> Plus de 100 cliniques partenaires à votre <br /> service.</p>
        </div>
   
        <div className='stat-card'> 
            <img src={patient} alt="cares-logo" />
            <div >+400 <br /> Docteurs</div>
            <p>  Plus de 400 médecins qualifiés à votre <br /> écoute.</p>
        </div>
    </div>
   </div>
  )
}

export default OurStat;