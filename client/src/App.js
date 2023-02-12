import Home from './components/Home';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blogs from './components/Blogs';

function App() {
  return (
    <div>
      <h1>Kitchen and Code</h1> 
      <nav>
        <ul className='navlist'>
          <li><Link to="/">
            <img src="https://www.iconpacks.net/icons/1/free-home-icon-1235-thumb.png" alt="houseIcon" className='houseIcon'></img>
            </Link></li>
          <li><Link to="/blogs">
            <img src="https://cdn-icons-png.flaticon.com/512/16/16294.png" alt="quill" className='quill'></img>
            </Link></li>
        </ul>
      </nav>  

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
    </div>
  );
}

export default App;
