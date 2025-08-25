import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import LogoSlider from '@/components/sections/LogoSlider';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <LogoSlider />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Index;
