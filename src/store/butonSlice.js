import { createSlice } from "@reduxjs/toolkit";

const butonSlice = createSlice({
    name: 'btnSlice',
    initialState : 5,
    reducers: {
        numberInc : (state) => { return state = state+5}

    }
});
export const { numberInc } = butonSlice.actions;
export default butonSlice.reducer;