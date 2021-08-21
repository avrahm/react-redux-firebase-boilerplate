import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// https://react-native-async-storage.github.io/async-storage/docs/install/
// https://blog.jscrambler.com/how-to-use-redux-persist-in-react-native-with-asyncstorage/
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer } from 'redux-persist';

import userReducer from '../reducers/UserReducer';

// The whitelist takes an array of strings. It is used to define which object key to use from the initial state to save the data. If no whitelist is provided, then redux persists all state.
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     // whitelist: ['todoReducer']
// };

// combine Reducers
const rootReducer = combineReducers({
    userState: userReducer,
});

// const pReducer = persistReducer(persistConfig, rootReducer);

// The middleware function thunk allows a redux store to make asynchronous AJAX requests
// actions muct be plain objects. middleware allows for async actions

// create the store: the applications state
export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);
