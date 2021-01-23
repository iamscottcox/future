import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import offers from "./offers";

const rootReducer = combineReducers({
  offers,
});

export type AppState = ReturnType<typeof rootReducer>;

export const middleware = getDefaultMiddleware<AppState>();

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
