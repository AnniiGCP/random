import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PointsCalculator } from '@/components/PointsCalculator';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowToJoinSection } from '@/components/HowToJoinSection';
import { TopPerformersSection } from '@/components/TopPerformersSection';
import { ContactSection } from '@/components/ContactSection';
import { cn } from '@/lib/utils';

const INITIAL_ACCOUNTS_ANALYZED = 119748;

export function HomePage() {
  const [accountsAnalyzed, setAccountsAnalyzed] = useState(INITIAL_ACCOUNTS_ANALYZED);
  const [isClientForHome, setIsClientForHome] = useState(false);

  useEffect(() => {
    setIsClientForHome(true);
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arcadeverseAccountsAnalyzed');
      if (saved) {
        setAccountsAnalyzed(parseInt(saved, 10));
      }
    }
  }, []);

  const incrementAccountsAnalyzed = () => {
    setAccountsAnalyzed(prevCount => {
      const newCount = prevCount + 1;
      if (typeof window !== 'undefined') {
        localStorage.setItem('arcadeverseAccountsAnalyzed', newCount.toString());
      }
      return newCount;
    });
  };

  return (
    <div className={cn("min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white")}>
      <HeroSection />
      <PointsCalculator onProfileScanned={incrementAccountsAnalyzed} />
      <FeaturesSection />
      <HowToJoinSection />
      <TopPerformersSection />
      <ContactSection accountsAnalyzedCountFromHome={isClientForHome ? accountsAnalyzed : INITIAL_ACCOUNTS_ANALYZED} />
    </div>
  );
}
