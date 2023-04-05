import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import About2 from "./component/main";
function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
        <About/>
        <About2/>
    </div>
  );
}

export default App;
