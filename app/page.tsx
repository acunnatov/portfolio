// app/page.tsx
"use client"; // Add this at the top

import { LanguageProvider } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import Aboutme from '@/components/Aboutme';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="w-full bg-gray-950 text-gray-300 px-4">
        <div className="max-w-screen-xl mx-auto lg:pt-10">
          <LanguageSelector />
          <Banner />
          <Aboutme />
          {/* <Experience /> */}
          <Skills />
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </div>
      </main>
    </LanguageProvider>
  );
}
