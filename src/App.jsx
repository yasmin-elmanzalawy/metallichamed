import { useState } from 'react'; // ✅ You forgot to import useState
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Clients from './components/Clients/Clients';

function App() {


   const [snap, setSnap] = useState(false);

  const handleSnap = () => {
    setSnap(true);
    setTimeout(() => setSnap(false), 600); // reset after animation
  };

  return (
    <>
      <div>
        <Routes>
          <Route path="/metallichamed/" element={<Home />} />
          <Route path="/metallichamed/navbar" element={<Navbar />} />
          <Route path="/metallichamed/clients" element={<Clients />} />
        </Routes>
      </div>



    



      
    </>
  );
}

export default App;
