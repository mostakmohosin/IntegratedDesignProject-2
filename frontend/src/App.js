import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/event' element={<Event />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
