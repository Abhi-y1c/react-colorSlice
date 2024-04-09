import {configureStore} from "@reduxjs/toolkit"
import coloReducer from "./colorSlice"
const store=configureStore({

    reducer:{
        mycolor :coloReducer

    }
});
export default store;
