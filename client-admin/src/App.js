import "./App.css";
import About from "./component/About/About";
import Admission from "./component/Admission/admission";

import Navbar from "./component/Home/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUsPage from "./contact/contact";
import Home from "./component/Home/Home";
import Campusbuzz from "./component/CampusBuzz/Campusbuzz";
function App() {
  return (
    <>
      <Router>
        <div className="flex w-screen">
          {/* Navbar */}
          <div>
            <Navbar />
          </div>

          {/* Routes */}
          <div>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Admission" element={<Admission />} />
              <Route path="/ContactUsPage" element={<ContactUsPage />} />
              <Route path="/Campusbuzz" element={<Campusbuzz />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
