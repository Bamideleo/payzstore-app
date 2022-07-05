import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
// import data from './data';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
    }
};
// const reducer = (state, action)=>{
//     return {products: data.products};
// }
const reducer = combineReducers({
productlist: productListReducer,
productDetail:productDetailsReducer,
cart:cartReducer,
});
const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer, 
    initialState,
     composeEnhencer(applyMiddleware(thunk)));



export default store;