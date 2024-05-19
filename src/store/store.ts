import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";


interface IRatingState {
  isOpen: boolean;
}
const initialState: IRatingState = {
  isOpen: false
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    closeModal: (state) => {state.isOpen=false;},
    openModal: (state) => {state.isOpen=true;},
  }
});

const combinedReducers = combineReducers(ratingSlice.reducer);

export const store = configureStore({
  reducer: {rateModal: ratingSlice.reducer},
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
