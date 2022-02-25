import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Forms from "./pages/Forms";
import Result from "./pages/Result";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pages/Information" element={<Information />} />
          <Route exact path="/pages/Forms" element={<Forms />} />
          <Route exact path="/pages/Result" element={<Result />} />
          <Route exact path="/pages/Account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
