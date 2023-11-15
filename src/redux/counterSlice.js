import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside reducers key as objects
    reducers:{
        //logic to update state

        //fn to increment
        increment:(state ,action)=>{
            //if it is a argument function  then it can only be accesed by action  and value in payload
            state.value+=action.payload
        },
        // fn to decrement
        decrement:(state,action)=>{
            //if it is a argument function  then it can only be accesed by action  and value in payload
            state.value-=action.payload

        },

        //fn to reset

        reset:(state)=>{
            state.value=0
        }
    }
})
//action is required by component inorder to update state 
export const {increment,decrement,reset} = counterSlice.actions

//reducer is required by store inorder to change the state value
export default counterSlice.reducer