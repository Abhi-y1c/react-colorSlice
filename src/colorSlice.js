
import {createSlice} from '@reduxjs/toolkit'
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"yellow"
    },
    reducers:{
        colorChange:(state,action)=>{
            state.bgcolor=action.payload;

        }
    }
});
export const {colorChange}=colorSlice.actions;
export default colorSlice.reducer;