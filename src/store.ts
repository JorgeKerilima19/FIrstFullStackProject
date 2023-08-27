import { configureStore } from "@reduxjs/toolkit";

const initialState = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
