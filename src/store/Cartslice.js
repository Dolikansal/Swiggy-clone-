import {createSlice} from '@reduxjs/toolkit'; 

const cart = createSlice({
    name: "cartslice",
    initialState:{
        items:[],
        count: 0,
    },

    reducers:{
        additems:(state, action)=>{
            state.items.push({...action.payload, quantity: 1});
            state.count++;
        },

        incitems:(state, action)=>{
            const element = state.items.find((item)=> item.id === action.payload.id);
            element.quantity += 1;
            state.count += 1;
        },

        decitems:(state, action)=>{
            const element = state.items.find((item)=> item.id === action.payload.id);
            if(element.quantity > 1){
                element.quantity -= 1;
                state.count -= 1;
            } else{
                state.items = state.items.filter((item)=> item.id !== action.payload.id);
                state.count -= 1;
            }
        }
    }
})

export const {additems, incitems, decitems} = cart.actions;
export default cart.reducer;