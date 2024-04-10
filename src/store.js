import {configureStore} from "@reduxjs/toolkit"
import todoReduder from "./todoSlice"
const store=configureStore({
    reducer:{
        todo:todoReduder
    }
});

export default store;