// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


"---1. This is the new modern way (React 18+)."
"You directly import createRoot from 'react-dom/client'---"
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)



"---2.Here you import the entire ReactDOM object and then call the function from it."
"This ALSO works and is also React 18 style.---"
// import ReactDOM from 'react-dom/client';
// ReactDOM.createRoot(document.getElementById('root')).render(
// <App />
// );
// but 1 is preferred
