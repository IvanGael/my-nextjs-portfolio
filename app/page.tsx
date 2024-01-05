"use client"

import { useLayoutEffect } from 'react';
import Hotjar from '@hotjar/browser';
import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Tabs from './components/Courses/Courses';
import Mentor from './components/Mentor/Mentor';
import Students from './components/Students/Students';
import Newsletter from './components/Newsletter/Newsletter';
import Formation from './components/Formation/Formation';
import ProfSkills from './components/professionnalSkills/profSkills';
import ProfExperiences from './components/ProfessionnalExperiences/profExperiences';
import Articles from './components/Articles/Articles';

export default function Home() {
  const siteId = 3814650;
  const hotjarVersion = 6;

  useLayoutEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, []);


  return (
    <main>
      <Banner />
      <Companies />
      <Tabs />
      <ProfSkills />
      <Formation />
      <ProfExperiences />
      <Articles />
      {/* <Mentor /> */}
      {/* <Students /> */}
      {/* <Newsletter /> */}
    </main>
  )
}
