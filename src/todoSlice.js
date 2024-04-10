import {createSlice} from  "@reduxjs/toolkit"
const initialState={
    task:[]
}
const todoSlice=createSlice({
    name:"todo",
    initialState:initialState,

    reducers:{
        addtask:(state,action)=>{
            state.task.push({id:Date.now(),work:action.payload});
        },
        
    }
})
export const {addtask}=todoSlice.actions;
export default todoSlice.reducer;