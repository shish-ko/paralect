import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IGenre } from "interfaces";



const initialState: IGenre[] = [];

const genreSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    addGenres: (state, {payload}) => {state = payload;},
  }
});


export const store = configureStore({
  reducer: {genres: genreSlice.reducer},
});

export const {addGenres} = genreSlice.actions;

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
