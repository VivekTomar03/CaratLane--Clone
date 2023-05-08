import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Topsec from './Components/Topsec';
import Midsec from './Components/Midsec';
import DownSec from './Components/DownSec';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
    <Navbar />
 
    <div style={{marginTop:"150px", marginBottom:"10px"}}>
    {/* <SignUp /> */}
        <Login />
    {/* <Slider /> */}
    {/* <Topsec /> */}
    {/* <Midsec /> */}
    {/* <DownSec /> */}
    <Home />
    {/* <Footer /> */}
    </div>

    </div>
  );
}

export default App;
