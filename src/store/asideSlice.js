import { createSlice } from "@reduxjs/toolkit";

const allOptions = ['All', 'Stright', 'One', 'Two', 'Three'];
const optionsWithoutAll = allOptions.filter(v => v !== 'All');

const asideSlice = createSlice({
    name: 'asideFilters',
    initialState: allOptions,
    reducers: {
        toggleFilter: (state, action) => {
            const value = action.payload;

            if (value === 'All' && state.includes('All')) {
                return [];
            }
            if (value === 'All' && !state.includes('All')) {
                return [...allOptions];
            }
            let newState = state.includes(value)
                ? state.filter(v => v !== value)
                : [...state, value];

            if (newState.includes('All') && value !== 'All') {
                newState = newState.filter(v => v !== 'All');
            }

            const selectedWithoutAll = newState.filter(v => v !== 'All');
            if (
                selectedWithoutAll.length === optionsWithoutAll.length &&
                optionsWithoutAll.every(v => newState.includes(v))
            ) {
                newState = ['All', ...optionsWithoutAll];
            }

            return newState;
        },
    },
});

export const { toggleFilter } = asideSlice.actions;
export default asideSlice.reducer;

