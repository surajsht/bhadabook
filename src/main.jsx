import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import "@fontsource/lily-script-one";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter";

document.getElementById('loader')?.remove();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
