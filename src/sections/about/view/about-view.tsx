//
import HomeHero from 'src/sections/home/home-hero';
import AboutHero from '../about-hero';
import AboutWhat from '../about-what';
import AboutTeam from '../about-team';
import AboutVision from '../about-vision';
import AboutTestimonials from '../about-testimonials';
import AboutSafe from '../about-safe';
import AboutPartner from '../about-partner';
import AboutClients from '../about-client';
import AboutCatelog from '../about-catalog';

// ----------------------------------------------------------------------

export default function AboutView() {
  return (
    <>


      <AboutHero />

      

      <AboutWhat />

      <AboutSafe />


      <AboutVision />

      <AboutTeam />

      <AboutCatelog/>
      

      {/* <AboutPartner /> */}
      <AboutClients />

      

      <AboutTestimonials />
    </>
  );
}
