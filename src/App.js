import './App.css';
import Navbar from './Components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { checkAuthStatus } from './Redux/Auth/Auth.action';
import { useEffect } from 'react';
import Footer from './Components/Footer';
import AllRoutes from './Routes/AllRoutes';

function App() {
 


  return (
    <div className="App">
         <Navbar/>
         <AllRoutes/>
         <Footer/>
    </div>
  )
}

export default App;
