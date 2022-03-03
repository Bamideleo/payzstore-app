import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
// import data from './data';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

const initialState = {};
// const reducer = (state, action)=>{
//     return {products: data.products};
// }
const reducer = combineReducers({
productlist: productListReducer,
});
const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer, 
    initialState,
     composeEnhencer(applyMiddleware(thunk)));



export default store;