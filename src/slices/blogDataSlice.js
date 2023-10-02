import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogdata: null,
}

export const blogDataSlice = createSlice({
  name: 'blogdata',
  initialState,
  reducers: {
    blogdata: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.blogdata = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { blogdata} = blogDataSlice.actions

export default blogDataSlice.reducer