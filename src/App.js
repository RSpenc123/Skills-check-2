import React from 'react';
import './App.css';
import Dashboard from './components/dashboard'
import Form from './components/form'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Dashboard/>

    </div>
  );
}

export default App;
