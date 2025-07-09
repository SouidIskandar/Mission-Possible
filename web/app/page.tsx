import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import LiveTracking from '@/components/LiveTracking';
import ARPreview from '@/components/ARPreview';
import SmartDiagnostic from '@/components/SmartDiagnostic';
import EcoCalculator from '@/components/EcoCalculator';
import VoiceAssistant from '@/components/VoiceAssistant';
import CoverageMap from '@/components/CoverageMap';
import StatsSection from '@/components/StatsSection';
import TrustBadges from '@/components/TrustBadges';
import EmergencyBanner from '@/components/EmergencyBanner';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <EmergencyBanner />
        <CoverageMap />
        <StatsSection />
        <TrustBadges />
        <LiveTracking />
        <ARPreview />
        <SmartDiagnostic />
        <EcoCalculator />
        <VoiceAssistant />
        <Testimonials />
      
      </main>
    </div>
  );
}