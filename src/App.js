import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import SliderComponent from "./components/SliderComponent";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <SliderComponent/>
      <Cards/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
