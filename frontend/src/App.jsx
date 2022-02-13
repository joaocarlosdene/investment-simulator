import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Resultado from './pages/resultado'
import Simulador from'./components/simulador'
function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/resultado" element={<Resultado/>}></Route>
        </Routes>
      </Router>
      
      <h1>Simulador de Investimentos</h1>
      <Simulador/>
    </div>
    
  );
}

export default App;
