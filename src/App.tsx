import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Creator from "./pages/Creator";
import Fakecord from "./pages/Fakecord";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Creator />} />
          <Route path="/fakecord" element={<Fakecord />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;