import { configureStore } from "@reduxjs/toolkit";
import project from "./projectSlice";
import invistor from "./invistorSlice";
import invistemint from "./invistemintSlice";
import auth from "./authSlice";

export const store = configureStore({
  reducer: {
    project,
    invistor,
    invistemint,
    auth,
  },
  devTools: true,
});
