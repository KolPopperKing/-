'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import CreateAndPlaySection from '@/components/landing/CreateAndPlaySection';
import KnowledgeWorldSection from '@/components/landing/KnowledgeWorldSection';
import GamificationSection from '@/components/landing/GamificationSection';
import SafetyCommunitySection from '@/components/landing/SafetyCommunitySection';
import CallToActionSection from '@/components/landing/CallToActionSection';
import Footer from '@/components/landing/Footer';
import AmbientBackground from '@/components/landing/AmbientBackground';

export default function LandingPage() {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening' | 'night'>('morning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('morning');
    else if (hour < 17) setTimeOfDay('afternoon');
    else if (hour < 21) setTimeOfDay('evening');
    else setTimeOfDay('night');
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Ambient Background System */}
      <AmbientBackground timeOfDay={timeOfDay} />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Create and Play Section */}
        <CreateAndPlaySection />

        {/* Knowledge World Section */}
        <KnowledgeWorldSection />

        {/* Gamification Section */}
        <GamificationSection />

        {/* Safety & Community Section */}
        <SafetyCommunitySection />

        {/* Call To Action Section */}
        <CallToActionSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}