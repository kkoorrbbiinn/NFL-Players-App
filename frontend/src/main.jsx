import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={'65150044943-k6sso69nn9s9ujbb1m2c3aribaslfabr.apps.googleusercontent.com'}>
    <Router>
      <App />
    </Router>
  </GoogleOAuthProvider>
)