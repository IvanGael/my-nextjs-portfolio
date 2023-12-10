import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';
import Formation from './components/Formation/Formation';
import ProfSkills from './components/professionnalSkills/profSkills';
import ProfExperiences from './components/ProfessionnalExperiences/profExperiences';

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Tabs />
      <ProfSkills/>
      <Formation/>
      <ProfExperiences/>
      {/* <Mentor /> */}
      {/* <Students /> */}
      {/* <Newsletter /> */}
    </main>
  )
}
