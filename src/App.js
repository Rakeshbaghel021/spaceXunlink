import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SpaceAddress from "./pages/SpaceAddress";
import SpaceHistory from "./pages/SpaceHistory";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="space-history" element={<SpaceHistory />} />
          <Route path="space-address" element={<SpaceAddress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
