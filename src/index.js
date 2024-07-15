import React from 'react';
import ReactDOM from 'react-dom/client';

import Welcomepage from './components/AppContainer'
import AppContainer from './components/AppContainer';
function App() {
  return(
    <AppContainer/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
