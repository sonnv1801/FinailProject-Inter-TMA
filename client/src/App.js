import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/hompage/HomePage';
import Shop from './pages/home/shop/Shop';
import Card from './components/cards/Card';
import { Payment } from './pages/home/payment/Payment';
import Login from './pages/home/login/Login';
import NotFound from './pages/home/notfound/NotFound';
import Register from './pages/home/register/Register';
import { Order } from './pages/home/order/Order';
import ProductDetail from './pages/home/productDetail/ProductDetail';
import Profile from './pages/home/profile/Profile';
import Nav from './components/navbar/Nav';
import Adminpage from './pages/admin/Adminpage';
function App() {
  const user = JSON.parse(localStorage.getItem('token'));
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          <Route path="/card" element={<Card />} />
          {user === null ? (
            <>
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/payment" element={<Payment />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
          <Route path="/admin" element={<Adminpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
