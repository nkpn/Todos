import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
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
import todosReducer from './todos/todos-reducer';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
