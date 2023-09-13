import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routers, Route, NavLink, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import PremiumContent from "./pages/Premium";
function App() {
  return (
      <div className="App">
        <Router>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/premium">Premium Content</NavLink>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/premium" element={<PremiumContent/>}/>
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
