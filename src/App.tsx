import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollOnNav";
function App() {
  return (
    <>
      {/* <Footer /> */}
      <section className="container">
        <ScrollToTop />
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
