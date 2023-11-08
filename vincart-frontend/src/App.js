
import './App.css';
import Navbar from './customer/Navigation/Navbar';
import Carousel from './customer/HomeSection/Carousel';
import Shop_category from './customer/HomeSection/Shop_category';
import Footer from './customer/HomeSection/Footer';

function App() {
  return (
    <div className="App overflow-hidden">
     
     <Navbar/>
     
     <Carousel />

     <Shop_category/>
     <Footer/>
    </div>
  );
}

export default App;
