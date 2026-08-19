import { Hero } from '@/components/sections/Hero';
import { AcademicTimeline } from '@/components/sections/AcademicTimeline';
import { TechnicalSkills } from '@/components/sections/TechnicalSkills';
import { SoftSkills } from '@/components/sections/SoftSkills';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { ContactForm } from '@/components/sections/ContactForm';
import { SiteStats } from '@/components/sections/SiteStats';
import { InternshipExperience } from '@/components/sections/InternshipExperience';
import { Certifications } from '@/components/sections/Certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <SiteStats />
      <AcademicTimeline />
      <InternshipExperience />
      <Certifications />
      <TechnicalSkills />
      <SoftSkills />
      <FeaturedProjects />
      <ContactForm />
    </>
  );
}
