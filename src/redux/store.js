import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";

const rootReducer = combineReducers({
  theme: ThemeSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
