import { configureStore } from "@reduxjs/toolkit";
import textsSlice from "../slices/addTextSlice";

const store = configureStore({
  reducer: {
    texts: textsSlice,
  },
});
export default store;
