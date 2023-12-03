import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout, Hero, PremierFeatures, Features, FAQ, Pricing, Testimonials } from './components'
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PremierFeatures />
              <Features />
              <FAQ />
              <Pricing />
              <Testimonials />
            </>
          } />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
