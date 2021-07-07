// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook-reducer';

// const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const phonebookPersistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

// const rootReducer = combineReducers({
//   phonebook: persistReducer(persistConfig, phonebookReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export default { store, persistor };
