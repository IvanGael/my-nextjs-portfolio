import Experience from '../Experiences/Experience';
import ProfessionalExperience from '../Experiences/ProfessionalExperience';

const experiencesData: ProfessionalExperience[] = [
  {
    title: 'Développeur mobile Fullstack',
    company: 'OHANA ENTERPRISE',
    location: 'Remote',
    startDate: 'Sept 2023',
    endDate: 'Nov 2023',
    description:
      "Développement d'une application mobile et d'une plateforme web visant à évaluer le niveau des entreprises par rapport à l'économie circulaire. (Flutter, NextJS, Firebase)",
  },
  {
    title: 'Développeur web Fullstack',
    company: 'CEEL TECHNOLOGIES',
    location: 'Lomé, TOGO',
    startDate: 'Mai 2022',
    endDate: 'Août 2022',
    description:
      "Développement d'une plateforme de délivrance rapide des actes judiciaires pour les tribunaux de première instance. (Angular, Spring boot, Postgresql)",
  },
  {
    title: 'Développeur web',
    company: 'IAI-TOGO',
    location: 'Lomé, TOGO',
    startDate: 'Juill 2021',
    endDate: 'Sept 2021',
    description:
      "Développement d'une plateforme de réservation de places pour les restaurants. (React, Firebase)",
  },
];


const ProfExperiences = () => {
    return (
        <div id="experiences-section" className="mx-auto mb-6 max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className='sm:flex justify-between items-center mb-12'>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Mon parcours professionnel</h2>
            </div>

            <Experience experiences={experiencesData} />


        </div>
    )
}

export default ProfExperiences;
