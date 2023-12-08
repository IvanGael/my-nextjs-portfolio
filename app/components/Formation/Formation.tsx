import Timeline from '../Timeline/Timeline';
import AcademicBackground from '../Timeline/AcademicBackground';

const academicData: AcademicBackground[] = [
  {
    title: "Génie Logiciel et systèmes d'information",
    degree: "Licence professionnelle",
    institution: "Institut Africain d'Informatique",
    year: "2019-2022",
  },
  {
    title: 'Sciences informatiques',
    degree: 'Cycle ingénieur 4ème année',
    institution: 'Polytech Nice Sophia',
    year: "2022-2023",
  },
  {
    title: 'Gestion de projets informatiques, Développement logiciel & Technologies émergentes',
    degree: 'Master of Science professionnel',
    institution: 'Epitech Technology Nice',
    year: "2023-Aujourdhui",
  },
];



const Formation = () => {
    return (
            <div id="formations-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center mb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Mon parcours académique</h2>
                </div>

                <div>
                <Timeline data={academicData} />
                </div>

                
            </div>
    )
}

export default Formation;
