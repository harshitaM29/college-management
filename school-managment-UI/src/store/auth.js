import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const initialAuthState = { tokenId: null, isLoggedIn: !!token, isAdmin: null };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.tokenId = action.payload.idToken;
      state.isLoggedIn = true;
      state.isPremium = action.payload.isPremium;
    },
    logout() {
      localStorage.clear();
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
