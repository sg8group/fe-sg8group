import React from 'react';
import Hero from '../corporate-value/Corporatehero';
import OurClient from '@/components/sections/OurClient';


import PhilosophyMain from './PhilosophyMain';
import PhilosophyCards from './PhilosophyCards';

export default function LogoPhilosophyPage() {
  return (
    <>
      <Hero title="Logo Philosophy" />
      
      <PhilosophyMain />
      <PhilosophyCards />

      <OurClient />
    </>
  );
}