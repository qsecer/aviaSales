import {createSlice} from "@reduxjs/toolkit";

const  tabSlice = createSlice({
    name: 'Tabs',
    initialState: 'cheap',
    reducers: {
        setTab: (state, action) => state = action.payload

    }
})
export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;