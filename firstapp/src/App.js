import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react';

let name= "Amish Sabir";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
    if (mode === 'light')
    {
      setMode ('dark');
      document.body.style.backgroundColor="black";
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor="white";

    }
  }
  return (
    <>
    
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter Text Here:" mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
