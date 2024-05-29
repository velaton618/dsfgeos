import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  isAuth: false
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
      state.isAuth = action.payload;
    }
  }
})

export const { setAuth } = adminSlice.actions;
export default adminSlice.reducer;
