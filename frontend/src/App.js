
import './App.css';
import Navbar from './components/Navbar';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import LiveData from './pages/LiveData';
import SafetyMeasures from './pages/Safety';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
<>
<Navbar/>
<Routes>
     
     <Route index element={<Home/>}/>
     <Route exact path="/live-data" element={<LiveData/>}/>
     <Route exact path="/home" element={<Home/>}/>
     <Route exact path="/safety" element={<SafetyMeasures/>}/>
     <Route exact path="/about" element={<About/>}/>

 </Routes>

<Footer/>
</>
  );
}

export default App;
