import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      {/* <Footer /> */}
      <section className="container">
        <Navbar />
        <main className="flex">
          <Sidebar />
          <div className="hero">
            <Outlet />
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
