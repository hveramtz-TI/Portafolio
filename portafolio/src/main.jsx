import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SpeedInsights } from "@vercel/speed-insights/react";
import './index.css';
import App from './App.jsx';

function Main() {
  return (
    <StrictMode>
      <SpeedInsights>
        <div className="app-content transition">
          <App />
        </div>
      </SpeedInsights>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);