import "./css/styles.css";
import "./css/vendor.css";
import Home from "./pages/Home";
import AppServer from "./pages/AppServer";

function App() {
  return (
    <div className="App">
      <main>
        <Home id="home" />
        <AppServer id="app-section"/>
      </main>

      
      
    </div>
  );
}

export default App;
