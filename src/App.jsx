import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import Skills from "./components/skills/Skills"
import Works from "./components/works/Works"
import Contacts from "./components/contacts/Contacts"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contacts />
      <FaFacebookF />
      <FaTwitter />
      <FaLinkedin />
      <FaGithub />
      <FaEnvelope />
      <FaPhone />
      <Footer/>
     
     
    </div>
  );
};

export default App;
