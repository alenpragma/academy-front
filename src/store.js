import { configureStore } from '@reduxjs/toolkit'
import blogDataReducer from '../src/slices/blogDataSlice'

export const store = configureStore({
  reducer: {
    blogData: blogDataReducer
  },
})