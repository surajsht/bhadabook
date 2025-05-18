import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./page/auth/Signin";
import Signup from "./page/auth/Signup";

const App = () => {
  return (
    <div className="text-text-primary bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
