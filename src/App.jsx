import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./page/auth/Signin";
import Signup from "./page/auth/Signup";
import Dashboard from "./page/Dashboard";
import Tenants from "./page/Tenants";

const App = () => {
  return (
    <div className="dark:bg-dark-background bg-background font-inter text-text-primary dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tenants" element={<Tenants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
