import '../styles/globals.css';
import Head from 'next/head';

import '../styles/globals.css';

import { Provider } from 'react-redux';
import {  combineReducers, configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';

//import { persistStore, persistReducer } from 'redux-persist';
//import { PersistGate } from 'redux-persist/integration/react';
//import storage from 'redux-persist/lib/storage';

const store = configureStore({
  

 reducer: {user},
});

function App({ Component, pageProps }) {
 return (
   <Provider store={store}>
     <Head>
       <title></title>
     </Head>
     <Component {...pageProps} />
   </Provider>
 );
}

export default App;


