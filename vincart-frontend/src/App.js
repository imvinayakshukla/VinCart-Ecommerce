
import './App.css';
import Navbar from './customer/Navigation/Navbar';
import Shop_category from './customer/HomeSection/Shop_category';
import Footer from './customer/Navigation/Footer';
import Filter from './customer/Product/Filter';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './User_Login/Signin';
import Signup from './User_Login/Signup';
import Product_Overview from './customer/Product/Product_Overview';


function App() {
  return (
    <div className="App overflow-hidden">
      <Router>


        <Navbar />
        
        <Routes>
          <Route path="/" element={<Shop_category />}></Route>
          <Route path="/productlist" element={<Filter />}></Route>
          <Route path="/product" element={<Product_Overview />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
         

          {/* <Shop_category/>  */}
          {/* <Filter /> */}

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
