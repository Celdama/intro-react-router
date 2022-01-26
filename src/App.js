import './App.css';
import About from './About';
import Nav from './Nav';
import Shop from './Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />} />
          <Route path='shop' element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
