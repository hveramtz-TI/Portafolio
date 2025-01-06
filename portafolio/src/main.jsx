import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import './index.css';
import App from './App.jsx';

function Main() {
  const vercelToken = import.meta.env.VITE_VERCEL_TOKEN;
  const vercelProjectId = import.meta.env.VITE_VERCEL_PROJECT_ID;

  return (
    <StrictMode>
      <div className="app-content transition">
        <App />
      </div>
      <SpeedInsights token={vercelToken} projectId={vercelProjectId}/>
      <Analytics/>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);