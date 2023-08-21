import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import productListReducer from './reducers/product.reducer'
// import productDetailsReducer from './reducers/product.reducer'
import {
    productListReducer,
    productDetailsReducer,

} from './reducers/product.reducer'


const initialState = {}
const middleware = [thunk]



const reducer = combineReducers({
    productList: productListReducer,
    productDetails:  productDetailsReducer,

})

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
