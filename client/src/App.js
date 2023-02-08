import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/hompage/HomePage';
import Shop from './pages/home/shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/card" element={<Card />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={'Not Found'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
