import {createStore, combineReducers} from 'redux'
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import darkReducer from './reducers/darkReducer';

const reducers = combineReducers({
    dark: darkReducer
})

function storeConfig(){
    return createStore(reducers, composeWithDevTools())
}

export const storeWrapper = createWrapper(storeConfig, { debug: false });

export default storeConfig

