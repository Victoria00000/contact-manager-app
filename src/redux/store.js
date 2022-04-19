import { createStore } from "redux";
import { combineReducers } from "redux";
import { contactReducer } from './reducers/indexReducers';

const reducerGroup = combineReducers({
    contactReducer
});

export const store = createStore(reducerGroup);
