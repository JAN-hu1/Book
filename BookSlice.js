import { createSlice } from '@reduxjs/toolkit'

export const BookSlice = createSlice({
  name: 'book',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state,action) => {
      
      let dupliCheck = [];

      dupliCheck = state.value.filter(item => {
      
      return item.title === action.payload.title;
      
      });
      
      if (dupliCheck.length == 0) {
      
      state.value.push(action.payload);
      
      }
      
      
    },
    decrement: (state ,action)=> {
      state.value=state.value.filter((item)=>{
    
        return (  item.title != action.payload.title )

      })
    },
  
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = BookSlice.actions

export default BookSlice.reducer