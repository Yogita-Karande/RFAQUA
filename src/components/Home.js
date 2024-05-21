import { ShortContact } from './Contact';
import MyHelmet from './Helmet';
import Hero from './Hero';
import Ourclients from './Ourclients';
import Photos from './Photos';
import ShortAboutUs from './ShortAboutUs';
import Slider from './Slider';



function Home() {
  const Pagetitle = "Home"
  return (
    <>
    <Hero title={Pagetitle}/>
    <MyHelmet
      title="Home"
      description="Welcome to my site! Explore our products and more."
      canonicalUrl="http://mysite.com/example"
    />

      <Slider/>
      <ShortAboutUs />
      <Ourclients/>
      <Photos/>
      <ShortContact/>
      
      
    </>
  );
}
export default Home;