import { useEffect, useState } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import WhitepaperRoute from './components/WhitepaperRoute';
// import WidthDisplay from './components/Width';

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    document.body.classList.add("overflow-hidden")
    setTimeout(() => {
      setScreenLoading(false);
      document.body.classList.remove("overflow-hidden")
    }, 2000);
  }, []);
  return (
    <>
      {/* <WidthDisplay /> */}
      {
        screenLoading ? (<Preloader />) : (<div>
          <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='/ico' element={<FirstPage />} />
            <Route path='/whitepaper' element={<WhitepaperRoute />} />
          </Routes>

        </div>)
      }
    </>
  );
}

export default App;
