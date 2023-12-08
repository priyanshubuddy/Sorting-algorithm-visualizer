import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <>
        <Navbar />
        <AppRoutes/>
      </>
    </React.StrictMode>
  </Router>
);