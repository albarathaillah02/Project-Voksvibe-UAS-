import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Mengimpor halaman-halaman yang sudah dibuat
import Beranda from "./pages/Beranda";
import FormLogin from "./pages/FormLogin";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <Routes>
        {/* Jalur ke Halaman Utama (Hero Section & Best Sellers) */}
        <Route path="/" element={<Beranda />} />
        
        {/* Jalur ke Halaman Login */}
        <Route path="/login" element={<FormLogin />} />
        
        {/* Jalur ke Halaman Profil (Detail Akun) */}
        <Route path="/profile" element={<Profile />} />
        
        {/* Jalur ke Halaman Pesanan (Status Pesanan Saya) */}
        <Route path="/orders" element={<Orders />} />

        {/* Catatan: Pastikan file Profile.jsx dan Orders.jsx 
          sudah ada di dalam folder src/pages/ lo ya! 
        */}
      </Routes>
    </Router>
  );
}

export default App;