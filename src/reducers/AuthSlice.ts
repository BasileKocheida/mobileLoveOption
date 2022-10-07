import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import UserModel from "../models/UserModel";
import { authService } from "../services/AuthServices";

interface SliceState { 
  user: UserModel|null;
  token: string|null;
  isAuthenticated: boolean;  
}

const initialState: SliceState = {
  user: null,
  token: null,
  isAuthenticated: false
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: { user: any; }, action: PayloadAction<UserModel>) => {
      state.user = action.payload
    },
    setToken: (state: { token: any; }, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setIsAuthenticated: (state: { isAuthenticated: any; }, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    login: (state, action: PayloadAction<any>) => {
      console.log(action);
      console.log(action.payload);
      console.log(action.payload.email);
      authService.login(action.payload.email, action.payload.password)
        .then((response: any) => {
          console.log(response);
        })
    }
  }
})

export const { setUser, setToken, setIsAuthenticated, login } = AuthSlice.actions
export default AuthSlice.reducer