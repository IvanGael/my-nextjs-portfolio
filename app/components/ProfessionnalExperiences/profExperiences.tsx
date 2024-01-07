import Experience from '../Experiences/Experience';
import ProfessionalExperience from '../Experiences/ProfessionalExperience';

const experiencesData: ProfessionalExperience[] = [
  {
    title: 'Full-stack web & mobile developer',
    company: 'OHANA ENTERPRISE',
    location: 'Remote',
    startDate: 'Sept 2023',
    endDate: undefined,
    description:
      "Development of a mobile application and a web platform aimed at assessing the level of companies in relation to the circular economy. (Flutter, NextJS, Firebase)",
  },
  {
    title: 'Full-stack web developer',
    company: 'HARVEST',
    location: 'Valbonne, France',
    startDate: 'May 2023',
    endDate: 'Aug 2023',
    description:
      "VIC Project - Development of a solution aimed at supporting banks in processing their customers' credit requests. (Angular, Spring boot, Microservices, Postgresql)",
  },
  {
    title: 'Full-stack web developer',
    company: 'CEEL TECHNOLOGIES',
    location: 'Lomé, TOGO',
    startDate: 'May 2022',
    endDate: 'Aug 2022',
    description:
      "Development of a platform for the rapid delivery of judicial documents for first instance courts. (Angular, Spring boot, Postgresql)",
  },
  {
    title: 'Web developer',
    company: 'IAI-TOGO',
    location: 'Lomé, TOGO',
    startDate: 'Jul 2021',
    endDate: 'Sept 2021',
    description:
      "Development of a seat reservation platform for restaurants. (React, Firebase)",
  },
];


const ProfExperiences = () => {
    return (
        <div id="experiences-section" className="mx-auto mb-6 max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className='sm:flex justify-between items-center mb-12'>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">My professional experiences</h2>
            </div>

            <Experience experiences={experiencesData} />


        </div>
    )
}

export default ProfExperiences;
