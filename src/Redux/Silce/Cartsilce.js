import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers:{
         // add to cart
         addToCart: (state,action)=>{
            // console.log("action",action)
            // state.carts=[...state.carts,action.payload] //normal add to card
            const IteamIndex =  state.carts.findIndex((iteam) => iteam.id === action.payload.id);
              if(IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
              }else{
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
              }
           
         },
         // remove perticular iteams
            removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
        },
         // remove single iteams decrement
         removeSingleIteams:(state,action)=>{
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if(state.carts[IteamIndex_dec].qnty >=1){
                state.carts[IteamIndex_dec].qnty -= 1
            }

        },
        // clear cart
        emptycartIteam:(state,action)=>{
          state.carts = []
      }
    }
});


export const {addToCart,removeToCart,removeSingleIteams,emptycartIteam}= cartSlice.actions;

export default cartSlice.reducer;
