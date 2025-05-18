import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./page/auth/Signup";
import Signup from "./page/auth/Signin";

const App = () => {
  return (
    <div className="text-primary bg-bg-main">
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
