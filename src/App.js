// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import ShowData from './ShowData';
import CapitalWeather from './CapitalWeather';
function App() {
  return (
    <div>
        
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/showdata' element={<ShowData/>}/>
          <Route exact path='/capitalweather' element={<CapitalWeather/>}/>
        </Routes>
        </BrowserRouter>



      {/* <Homepage/> */}
    </div>
  );
}

export default App;
