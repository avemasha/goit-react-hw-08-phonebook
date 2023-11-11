import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, authReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {

    auth: persistReducer(authPersistConfig, authReducer),
   

    contacts: contactsReducer,
    filter: filterReducer,
   
  },
});

export const persistor = persistStore(store);