//dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

//components
import Main from './components/MainComponent';

//app styles
import './App.css';

const store = ConfigureStore();

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
}

export default App;

