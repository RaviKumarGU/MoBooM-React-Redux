import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./stores/components/basketSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
