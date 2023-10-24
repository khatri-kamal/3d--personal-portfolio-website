import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Ideas,
  GoToTop,
  Preloader,
} from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds before setting the loading status to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <div className="bg-hero-pattern bg-cover bg-no-repeat-bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Ideas />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
              <GoToTop />
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
