import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route element={<Login />} path='/login' />
          <Route element={<Register />} path='/register' />
          <Route element={<Home />} path='/' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
