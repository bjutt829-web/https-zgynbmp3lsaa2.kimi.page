import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Blog from '@/pages/Blog';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#050A08] text-[#F8F6F0]">
        <Navbar />
        <CartDrawer />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
