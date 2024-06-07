import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const[Mode,setMode] = useState('light');

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      
      <div className="container mt-4">
      <TextForm header="Enter the Text to Analyze" mode={Mode}/>
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
