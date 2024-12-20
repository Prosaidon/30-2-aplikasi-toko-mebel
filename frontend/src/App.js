import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart"
import Footer from './Components/Footer/Footer'
import LoginSignup from "./Pages/LoginSignup";
import home_banner from "./Components/Assets/home.png";
import office_banner from "./Components/Assets/office.png"
import kitchen_banner from "./Components/Assets/kitchen.png"
import CheckoutSuccess from "./Pages/CheckoutSuccess";
import NotFound from "./Pages/NotFound";
import ReviewList from "./Components/ReviewList/ReviewList"; // Pastikan import ReviewList benar
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import Admin from "./Pages/Admin";
import Dashboard from "./Pages/dashboard"
import NavAdmin from "./Components/NavAdmin/NavAdmin";
import Contact from "./Pages/Contact";
import About from "./Components/About/About";

function App() {
  const isAuthenticated = localStorage.getItem('auth-token');
 
  
  

  return (
    <div className="App">
      <BrowserRouter>
      <NavAdmin/>
      <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="admin" element={<Admin/>}/>
          <Route path="/dashboard" element = {<Dashboard/>} />
          <Route path="/home" element={<ShopCategory banner={home_banner} category="living" />} />
          <Route path="/office" element={<ShopCategory banner={office_banner} category="office" />} />
          <Route path="/kitchen" element={<ShopCategory banner={kitchen_banner} category="kitchen" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/Login" element={<LoginSignup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About/>} />
          <Route path="/api/orders" element={<ReviewList />} />
          <Route path="/reviews/:productId" element={<ReviewForm />} />
          <Route path="/reviews/edit/:reviewId" element={<ReviewForm />} />
          <Route path="/reviews/:productId/:reviewId" element={isAuthenticated ? <ReviewForm /> : <Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
