import { configureStore } from "@reduxjs/toolkit";
import loader from "./loader";

const store = configureStore({
    reducer: loader
})
export default store