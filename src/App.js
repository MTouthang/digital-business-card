import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="container">
      <HeroSection />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
