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

import { sessionReducer } from './session';
import financeReducer from './finance/financeReducer';
import transactionsReducer from './transactions/transactionsReducer';
import globalReducer from './global/globalReducer';
import categoriesReducer from './categories/categoriesReducer';

// const middleware = getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   });

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const PersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    session: persistReducer(PersistConfig, sessionReducer),
    finance: financeReducer,
    transactions: transactionsReducer,
    global: globalReducer,
    categories: categoriesReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
