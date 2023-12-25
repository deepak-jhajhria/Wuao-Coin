import './App.css';
import Benefit from './components/Benefit';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='container max-w-[1140px]'>
        <Benefit />
      </div>
    </div>
  );
}

export default App;
