import Home from './components/Home';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/blogs">Blogs</Link>
        </ul>
      </nav>  

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
