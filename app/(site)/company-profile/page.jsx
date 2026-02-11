import React from 'react';
import Hero from '@/components/shared/Hero';
import OurMindset from '@/components/shared/OurMindset';
import OurClient from '@/components/shared/OurClient';
import OurServices from '@/components/shared/service/OurServices';
import AboutSection from './sections/AboutSection';
import MindsetIntro from './sections/MIndsetSection';
import VisionMissionSection from './sections/VisionMissionSection';

function CompanyProfilePage() {
  return (
    <>
      <Hero title="Company Profile" />
      <AboutSection />
      <VisionMissionSection />
      <MindsetIntro />
      <OurServices/>
      <OurMindset/>
      <OurClient/>
    </>
  );
}

export default CompanyProfilePage;
