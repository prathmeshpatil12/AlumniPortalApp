import './App.css';
import {React} from 'react';
import { AppWrapper } from './components/AppWrapper';
import Login from './components/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <h1>Alumni Portal</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AppWrapper />} />
          <Route exact path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
