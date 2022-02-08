import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Resultado from './components/resultado'
import Simulador from'./components/simulador'
function App() {
  return (
    <div className="App">
      <h1>Simulador de Investimentos</h1>
      <Simulador/>
      <Resultado/>
    </div>
    
  );
}

export default App;
