import { configureStore } from '@reduxjs/toolkit'
import BookReducer from './BookSlice'

export default configureStore({
  reducer: {
    book:BookReducer


  }
})