import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './styles/style.css'
import './icons/style.css'

import App from './App';

const rootElement = document.getElementById("root")
const root = createRoot(rootElement ? rootElement : document.createElement('div'));

root.render(
  <App />
);