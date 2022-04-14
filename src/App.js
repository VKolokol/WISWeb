import './style.css';

import React from "react";
import NavBar from "./components/NavBar";
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';




function App() {

  return (
      <BrowserRouter>
        <div className="container">  
          <NavBar />
          <AppRouter />
        </div>
      </BrowserRouter>

  );
}

export default App;
