import './App.css';
import Benefit from './components/Benefit';
import Footer from './components/Footer';
import Header from './components/Header';
import Partnership from './components/Partnership';
import PublicSec from './components/PublicSec';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Whitepaper from './components/Whitepaper';

function App() {
  return (
    <div>
      <Header />
      <div className='container max-w-[1140px]'>
        <Benefit />
      </div>
      <Whitepaper />
      {/* <Roadmap /> */}
      {/* <PublicSec /> */}
      {/* <Tokenomics /> */}
      {/* <Partnership /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
