// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SiteLayout from './component/layout/siteLayout';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
          <SiteLayout>
            <App/>
          </SiteLayout>
      </BrowserRouter>
   </React.StrictMode>
);
