import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;

export const middleware = getDefaultMiddleware<AppState>();

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
