import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import firstPage from "./reducers/firstPage"

const reducer = combineReducers({
    firstPage
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;