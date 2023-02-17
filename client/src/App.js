import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/hompage/HomePage';
import Shop from './pages/home/shop/Shop';
import Card from './components/cards/Card';
import { Payment } from './pages/home/payment/Payment';
import Navbar from './components/navbar/Navbar';
import Login from './pages/home/login/Login';
import NotFound from './pages/home/notfound/NotFound';
import Register from './pages/home/register/Register';
import { Order } from './pages/home/order/Order';
import ProductDetail from './pages/home/productDetail/ProductDetail';
import Profile from './pages/home/profile/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          <Route path="/card" element={<Card />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
