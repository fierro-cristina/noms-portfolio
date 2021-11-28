import "./App.css";
import About from "./components/About";
import Combos from "./components/Combos";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Specialties from "./components/Specialties";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header className="header" />
      </div>
      <div>
        <Presentation className="presentation" />
      </div>
      <div>
        <About className="about" />
      </div>
      <div>
        <Specialties className="specialties" />
      </div>
      <div>
        <Combos className="combos" />
      </div>
      <div>
        <Footer className="footer" />
      </div>
    </>
  );
}

export default App;
