import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, Signup } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
        <ToastContainer position="top-right"/>
    </Router>
  );
}

export default App;
