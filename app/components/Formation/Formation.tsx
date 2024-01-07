import Timeline from '../Timeline/Timeline';
import AcademicBackground from '../Timeline/AcademicBackground';

const academicData: AcademicBackground[] = [
  {
    title: "Software and information systems engineering",
    degree: "Professional license",
    institution: "Institut Africain d'Informatique",
    year: "2019-2022",
  },
  {
    title: 'Computer Science',
    degree: '4th year engineering cycle',
    institution: 'Polytech Nice Sophia',
    year: "2022-2023",
  },
  {
    title: 'IT Project Management, Software Development & Emerging Technologies',
    degree: 'Professional Master of Science',
    institution: 'Epitech Technology Nice',
    year: "2023-Present",
  },
];



const Formation = () => {
    return (
            <div id="formations-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center mb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">My academic background</h2>
                </div>

                <div>
                <Timeline data={academicData} />
                </div>

                
            </div>
    )
}

export default Formation;
