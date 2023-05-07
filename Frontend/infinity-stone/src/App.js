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


function App() {
  return (
    <div className="App">
    <Navbar />
    <SignUp />
    {/* <Slider /> */}
    {/* <Topsec /> */}
    {/* <Midsec /> */}
    {/* <DownSec /> */}
    {/* <Home /> */}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
