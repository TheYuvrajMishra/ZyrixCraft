import { useEffect, useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HeroSection from './Pages/HeroSection'
import Services from './Pages/Services'
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import MouseTrailer from './Components/MouseTrailer';
import SEO from './Components/SEO';
// import { siteMetadata } from './config/metadata';
// import { initPerformanceOptimizations, throttle } from './utils/performance';
// import GridShowcase from './Pages/GridShowcase'

function App() {
  const smokeyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Initialize performance optimizations
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      if (smokeyRef.current) {
        smokeyRef.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <Router>
      <SEO />
      <div className="fixed w-full h-screen overflow-x-hidden bg-black">
        {/* Grid background */}
        <div
          ref={gridRef}
          className="fixed inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:40px_40px] transition-transform duration-100"
        />
        <div className="relative z-10 h-full w-full">
          <MouseTrailer />
          <Navbar />
          <HeroSection />
          <Services />
          <Contact />
          <Footer />
          {/* <GridShowcase /> */}
        </div>
      </div>
    </Router>
  )
}

export default App
