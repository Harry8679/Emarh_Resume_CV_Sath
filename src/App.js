import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Login />} path='/login' />
          <Route element={<Register />} path='/register' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
