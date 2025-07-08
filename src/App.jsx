import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
