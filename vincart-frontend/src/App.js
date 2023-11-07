
import './App.css';
import Navbar from './customer/Navigation/Navbar';
import Carousel from './customer/HomeSection/Carousel';
import Shop_category from './customer/HomeSection/Shop_category';

function App() {
  return (
    <div className="App ">
     
     <Navbar/>
     
     <Carousel />

     <Shop_category/>
    </div>
  );
}

export default App;
