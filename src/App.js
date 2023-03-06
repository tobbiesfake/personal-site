import './App.css';
import { Header } from './components/header/Header.js';
import { Home } from './components/home/Home.js';
import { About } from './components/about/About.js';
import { Skills } from './components/skills/Skills.js';
import { Qualification } from './components/qualification/Qualification.js';
import { Services } from './components/services/Services.js';
import { Portfolio } from './components/portfolio/Portfolio.js';
import { Hire } from './components/hire/Hire.js';
import { Contact } from './components/contact/Contact.js';
import { Footer } from './components/footer/Footer.js';
import { ScrollToTop } from './components/scroll-to-top/ScrollToTop.js';
import './responsive/responsive.css';
import './animate/scrollActive.js';
import './animate/changeBgHeader.js';
import './animate/scrollToTop.js';
import './animate/theme.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <Services/>
        <Portfolio/>
        <Hire/>
        <Contact/>
        <Footer/>
        <ScrollToTop/>
      </main>
    </div>
  );
}

export default App;
