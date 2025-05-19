import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./page/auth/Signin";
import Signup from "./page/auth/Signup";
import Dashboard from "./page/auth/Dashboard";

const App = () => {
  return (
    <div className="text-text-primary bg-background font-inter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
