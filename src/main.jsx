import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'
import ReduxExample from './ReduxExample';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import ProductReducer from './redux/reducers';

const store = createStore(ProductReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // store setup

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ReduxExample />
  </Provider>
)
