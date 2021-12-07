import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import orderReducer from "./orderRedux";
import cartOrderReducer from "./cartOrderRedux";
import transOrderReducer from "./transOrderRedux";
import finishedOrderReducer from "./finishedOrderRedux";
import waitOrderReducer from "./waitOrderRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  cartOrder: cartOrderReducer,
  transOrder: transOrderReducer,
  finishedOrder: finishedOrderReducer,
  waitOrder: waitOrderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
