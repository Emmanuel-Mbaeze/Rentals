import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  content: [],
};

const Globalstate = createSlice({
  initialState,
  name: "authUser",
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },
    addcontent: (state, { payload }) => {
      state.content = payload;
    },

    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, addcontent, signOut } = Globalstate.actions;

export default Globalstate.reducer;
