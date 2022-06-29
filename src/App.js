import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/HomeComponent';
import SigninPage from './pages/Signin';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>   
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/signin" element={<SigninPage/>}  />
        </Routes>

    
    </Router>
      
    
  );
}

export default App;
