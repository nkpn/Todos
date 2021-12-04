import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import CustomLoader from 'components/SpinnerLoader/SpinnerLoader';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<CustomLoader />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
