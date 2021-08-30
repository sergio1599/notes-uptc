import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import reportWebVitals from './reportWebVitals';
import './index.css';

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
