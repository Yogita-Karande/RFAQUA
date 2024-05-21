import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallary from "./components/Gallary";
import Home from './components/Home';
import Menubar from './components/Menubar';
import Photos from './components/Photos';
import Products from './components/Products';
import ProductsDetails from './components/ProductsDetails';
import Videos from './components/Videos';

function App() {
  return (
  <div className="App">
      <BrowserRouter>
       <Menubar/>
       {/* <Hero/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='blogs' element={<Blogs/>} />
          <Route path='products' element={<Products/>} />
          <Route path='gallary' element={<Gallary/>} />
          <Route path='contact-us' element={<Contact/>} />
          <Route path='about-us' element={<AboutUs/>} />
          <Route path="/products-details" element={<ProductsDetails/>} />
          <Route path="/photos" element={<Photos/>} />
          <Route path="/videos" element={<Videos/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
      );
}
export default App;
