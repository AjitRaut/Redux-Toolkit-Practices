import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./Authentication_Flow_Slice"

const store = configureStore({
    reducer:{
        auth:authreducer,
    }
}) 
export default store;