
import './App.css';
import Navbar from './customer/Navigation/Navbar';
import Shop_category from './customer/HomeSection/Shop_category';
import Footer from './customer/Navigation/Footer';
import Filter from './customer/Product/Filter';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App overflow-hidden">
      <Router>


        <Navbar />
        <Routes>
          <Route path="/" element={<Shop_category />}></Route>
          <Route path="/productlist" element={<Filter />}></Route>
    

          {/* <Shop_category/>  */}
          {/* <Filter /> */}

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
