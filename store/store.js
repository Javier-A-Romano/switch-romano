import { createStore, combineReducers } from 'redux';
import { listReducer } from '../reducers/listReducer';

const reducers = combineReducers({

    list: listReducer,

})

export const store = createStore(reducers);