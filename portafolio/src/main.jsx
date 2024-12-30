import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

function Main() {
  return (
    <StrictMode>
      <div className="app-content transition">
        <App />
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
