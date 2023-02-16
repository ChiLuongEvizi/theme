import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "",
  loading: true,
};

const ThemeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    switchMode: (state, action) => {
      state.mode = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { switchMode, setLoading } = ThemeSlice.actions;
export default ThemeSlice.reducer;
