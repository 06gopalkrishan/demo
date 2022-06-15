import { ToastContainer } from 'react-toastify';
import './App.css';
import SuperDashboard from './Pages/SDashboard/superdashboard';
import LandingPage from './Pages/landingPage/landing';
import Svg from './Components/Svg';
// import '../public/fonts'

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' />
      <LandingPage />
      <SuperDashboard />
      <Svg/>
    </div>
  );
}

export default App;
