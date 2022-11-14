// @ts-ignore
import Dashboard from "./components/dashboard";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Embed from "./components/embed";
import AuthLoading from "./components/auth-loading";
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from "./components/landing-page";


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <AuthLoading />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginButton />}/> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="embed/:graphId" element={<Embed />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
