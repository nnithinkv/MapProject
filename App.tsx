import React from 'react';
import {Provider} from 'react-redux';
import {Start} from './src/navigation';
import configureStore from './src/redux-store/store';

const App = () => {
  // Initialize the store
  const store = configureStore();
  return (
    <Provider store={store}>
      <Start />
    </Provider>
  );
};

export default App;
