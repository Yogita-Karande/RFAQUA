import MyHelmet from "./Helmet";
import Hero from "./Hero";
import Photos from "./Photos";
import Videos from './Videos';

function Gallary() {
  const GalleryTitle = "Gallary"
  return (
    <div>
       <Hero title={GalleryTitle}/>
        <MyHelmet
          title="Gallary"
          description="Welcome to my site! Explore our products and more."
          canonicalUrl="http://mysite.com/example"
       />
      <Photos/>
      <Videos/>
      
    </div>
  )
}
export default Gallary;


export function ShortGallary() {
  




}
