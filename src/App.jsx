import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ no BrowserRouter here
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Clients from './components/Clients/Clients';
import Videos from './components/Videos/Videos';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  const [snap, setSnap] = useState(false);

  const handleSnap = () => {
    setSnap(true);
    setTimeout(() => setSnap(false), 600); // reset after animation
  };

  return (
    <>
      <ScrollToTop /> {/* works fine without another Router */}
      <Navbar />
      <div>
        <Routes>
          {/* Remove /metallichamed prefix */}
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
