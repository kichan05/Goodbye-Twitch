import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from "./firebaseInfo";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "notification_received")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
