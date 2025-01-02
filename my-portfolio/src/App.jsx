function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default App;