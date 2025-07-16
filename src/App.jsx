import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Skils from './components/skils/Skils';

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skils />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
