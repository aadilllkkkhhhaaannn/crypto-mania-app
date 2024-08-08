import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
  name: "card",
  initialState: {
    CardItems: [],
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        CardItems: [action.payload, ...state.CardItems],
      };
    },
    remove: (state, action) => {
      return{
        ...state,
        CardItems:state.CardItems.filter((item)=>item.id!==action.payload),
      }
    },
  },
  extraReducers: (bulider) => {},
});
export const {add,remove}=cardSlice.actions;
export default cardSlice.reducer;
