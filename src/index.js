import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
//752933463793-g61hac6e0rbe4ohe4ruqraeke24afnpl.apps.googleusercontent.com

root.render(
    <React.StrictMode>
        {/* <BrowserRouter>
            <App />
        </BrowserRouter> */}
        <GoogleOAuthProvider clientId="752933463793-g61hac6e0rbe4ohe4ruqraeke24afnpl.apps.googleusercontent.com">
            <App/></GoogleOAuthProvider>;
    </React.StrictMode>
);

reportWebVitals();
