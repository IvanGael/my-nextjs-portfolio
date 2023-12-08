import Skills from '../Skills/Skills';
import ProfessionalSkills from '../Skills/ProfessionalSkills';

const skillsData: ProfessionalSkills[] = [
    { skill: 'React', level: '0.7' },
    { skill: 'NextJS', level: '0.3' },
    { skill: 'Golang', level: '0.2' },
    { skill: 'NodeJS', level: '0.4' },
    { skill: 'Spring boot', level: '0.4' },
    { skill: 'Flutter', level: '0.4' },
    { skill: 'Firebase', level: '0.4' },
    { skill: 'Docker', level: '0.2' },
];

const ProfSkills = () => {
    return (
        <div id="techs-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className='sm:flex justify-between items-center mb-12'>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Mes compétences techniques</h2>
            </div>

            <Skills skills={skillsData} />


        </div>
    )
}

export default ProfSkills;
