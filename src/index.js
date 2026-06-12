import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/stylesheet.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CSS from './CSS';


const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
root.render(<CSS />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
