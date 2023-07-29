import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {AppProvider} from "./Components/context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AppProvider>
    <Router>
    <App />
    </Router>
    </AppProvider>

);


reportWebVitals();
