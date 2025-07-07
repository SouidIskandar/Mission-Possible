
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <Testimonials />
      </main>
    </div>
  );
}