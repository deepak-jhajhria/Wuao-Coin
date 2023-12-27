import { useEffect, useState } from 'react';
import './App.css';
import Benefit from './components/Benefit';
import Footer from './components/Footer';
import Header from './components/Header';
import Partnership from './components/Partnership';
import Preloader from './components/Preloader';
import PublicSec from './components/PublicSec';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Whitepaper from './components/Whitepaper';

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      setScreenLoading(false);
      document.body.classList.remove("overflow-hidden")
    }, 0);
  }, []);
  return (
    <>
      {
        screenLoading ? (<Preloader />) : (<div>
          <Header />
          <Benefit />
          <Whitepaper />
          <Roadmap />
          <PublicSec />
          <Tokenomics />
          <Partnership />
          <Footer />
        </div>)
      }
    </>
  );
}

export default App;
