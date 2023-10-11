import { configureStore } from "@reduxjs/toolkit";
import Cartsilce from "../Silce/Cartsilce";

// create store
export const store = configureStore({
    reducer:{
        allCart:Cartsilce
    }
})