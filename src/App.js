import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Event from './components/pages/Event';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create-event" element={<Event />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
