import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from "./components/Login/Login";
import {Footer} from "./components/Footer/Footer";
import reportWebVitals from './reportWebVitals';

const Home=()=>{
  return(<>
    <Login/>
    <Footer/> 
  </>);
}

ReactDOM.render(
    <Home/>, 
  document.getElementById('root')
);

reportWebVitals();
