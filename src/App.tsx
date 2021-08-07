import "./css/styles.css";

import Home from "./pages/Home";
import AppServer from "./pages/AppServer";
import WhyStartup from "./pages/WhyStartup";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Support from "./pages/Support";
function App() {
  return (
    <div className="App">
      <main>
        <Home id="home" />
        <AppServer id="app-section" />
        <Statistics />
        <WhyStartup id="why-startup-section" />
        <About id="about-section" />
        <Plan id="plan-section" />
        <Support id="support-section" />
        <Footer />
      </main>
    </div>
  );
}

export default App;
