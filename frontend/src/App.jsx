import { useEffect } from 'react'
import { initCrisp } from './utils/crisp'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Initialize Crisp chat widget on component mount
  useEffect(() => {
    initCrisp();
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
