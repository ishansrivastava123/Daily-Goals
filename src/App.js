import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
// import Contact from './Components/Contact';
// import About from './Components/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
