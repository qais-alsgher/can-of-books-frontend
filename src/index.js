import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-afas4w1t.us.auth0.com"  
    clientId="dTB8ZGLHTx1GhMtRBen1QfX5VZKFJpTI"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
</React.StrictMode>
);
