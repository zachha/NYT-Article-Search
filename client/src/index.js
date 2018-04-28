import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import fontawesome from "@fortawesome/fontawesome";
import freeSolidIcons from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(freeSolidIcons);


ReactDOM.render(<App />, document.getElementById('root'));

