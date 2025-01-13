import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundImage from "./components/Background";
import FrontBanner from "./components/FrontBanner";
import MapComponent from "./components/MapComponent";
import AboutUsComponent from "./components/AboutUsComponent"; // Import the new AboutUsComponent

function App() {
  return (
    <div>
      <div className="content">
        <BackgroundImage /> {/* Add the background image component */}
        <Navbar />
      </div>
      <div className="customDiv">
        <Router>
          <Routes>
            <Route path="/reparatii-vidanje" element={ < div className="frontPageComponents" > <FrontBanner /> </div> } />
            <Route path="/reparatii-vidanje/home" element={ < div className="frontPageComponents" > <FrontBanner /> </div> } />
          </Routes>
        </Router>
      </div>
      <div style={{ marginBottom: '0' }}>
      <AboutUsComponent />
      </div>
      <div style={{ marginBottom: '0' }}>
        <MapComponent /> {/* Add the MapComponent 100px above the footer */}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;