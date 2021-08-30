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






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
