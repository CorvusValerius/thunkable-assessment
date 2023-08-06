import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider, useStoreRehydrated } from 'easy-peasy';
import './index.css';
import App from './components/App/App.component';
import setupStore from './state/store';

function WaitForStateRehydration ({ children }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <WaitForStateRehydration>
        <App />
      </WaitForStateRehydration>
    </StoreProvider>
  </React.StrictMode>
);
