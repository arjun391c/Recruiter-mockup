import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {JobList} from './jobReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            joblist: JobList
        }),composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
};

