import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import './App.css';
import { Createpost } from './pages/createpost/createpost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Createpost" element={<Createpost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
