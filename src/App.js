import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
