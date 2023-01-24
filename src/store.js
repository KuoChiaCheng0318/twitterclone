import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
