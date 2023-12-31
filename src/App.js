import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/pages/login/Signup';
import Login from './components/pages/login/Login';
import Main from './components/pages/main/Main';
import CreateAd from './components/pages/ad/CreateAd';
import Navbar from './components/layout/Navbar';
import Profile from './components/pages/profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/createAd" element={<CreateAd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
