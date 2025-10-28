import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <Button theme='dark' onClick={() => alert("Cliquei")}>
      Enviar
    </Button>
  );
}

export default App;
