import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../slice/invoiceSlice";

const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
  },
});

export default store;
