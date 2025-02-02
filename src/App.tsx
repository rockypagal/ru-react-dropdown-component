import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

function App() {
  const [currentHero, setCurrentHero] = useState<string>("installation n");

  return (
    <main className="container flex">
      <Sidebar setCurrentHero={setCurrentHero}/>
      <Hero currentHero={currentHero} />
    </main>
  );
}

export default App;
