import { createStore, combineReducers
  //, applyMiddleware 
} from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './Reducer/productReducer';
//import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  productList: productReducer,
});

const store = createStore(
  rootReducer,
 // composeWithDevTools(applyMiddleware(thunk))
);

export default store;

