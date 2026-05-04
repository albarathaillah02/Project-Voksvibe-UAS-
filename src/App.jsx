import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import FormLogin from "./pages/FormLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<FormLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;