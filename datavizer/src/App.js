// @ts-ignore
import Dashboard from "./components/dashboard";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Embed from "./components/embed";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="embed" element={<Embed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
