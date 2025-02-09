import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [currentHero, setCurrentHero] = useState<string>("installation");

  return (
    <>
      {/* <Footer /> */}
      <section className="container">
        <main className="flex">
          <Sidebar setCurrentHero={setCurrentHero} currentHero={currentHero} />
          <Hero currentHero={currentHero} />
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
