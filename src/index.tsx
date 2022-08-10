import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from "./components/App/app";
import store from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
 /* <React.StrictMode>*/
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
  /*</React.StrictMode>*/
);
