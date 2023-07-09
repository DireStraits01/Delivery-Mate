import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/pages/login/Login';
import Signup from './components/pages/login/Signup';
import Main from './components/pages/main/Main';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
