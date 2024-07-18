import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/redux/store";

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
    },
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { logout, login } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuthToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
