import characterReducer from './characterReducer';
import NewMessageReducer from './newMessageReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";

//Combine all the sub reducers
const rootReducer = combineReducers({
    characters: characterReducer,
    message:NewMessageReducer
})

const store = createStore(rootReducer)
export default store

