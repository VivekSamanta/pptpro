import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Blogdetails from "./pages/Blogdetails";
import Preloader from "./components/Preloader";
import Shopdetails from "./pages/Shopdetails";

function App() {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  const handleClosePreloader = () => {
    setIsPreloaderVisible(false);
  };

  return (
    <div className="App">
      {isPreloaderVisible && <Preloader onClose={handleClosePreloader} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Service />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopdetails" element={<Shopdetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails" element={<Blogdetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
