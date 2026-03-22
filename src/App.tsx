import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { SettingsProvider } from "./context/SettingsContext"
import Creator from "./pages/Creator";
import Fakecord from "./pages/Fakecord";

function App() {
  return (
    <Router>
      <SettingsProvider>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Creator />} />
          <Route path="/fakecord" element={<Fakecord />} />
        </Routes>
      </AppProvider>
      </SettingsProvider>
    </Router>
  );
}

export default App;