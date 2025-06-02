import {sortData, sortDataForTransfers} from "../utilits/utilits.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getTickets = createAsyncThunk(
    'fetchTickets',
    async (asideSlice, thunkAPI) => {
        const state = thunkAPI.getState();
        const filters = state.asideFilters;
        const currentTab = state.tabs;


        try {
            const searchResponse = await fetch('https://aviasales-test-api.kata.academy/search');
            if (!searchResponse.ok) {
                throw new Error(`Ошибка при получении searchId: ${searchResponse.status}`);
            }

            const { searchId } = await searchResponse.json();

            const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
            if (!ticketsResponse.ok) {
                throw new Error(`Ошибка при получении билетов: ${ticketsResponse.status}`);
            }

            const ticketsRes = await ticketsResponse.json();
            const ticketsDatatr = await sortDataForTransfers(ticketsRes.tickets, filters);
            const ticketsDataF = await sortData(ticketsDatatr, currentTab)
            const visibleTickets =  ticketsDataF.slice(0, state.btn);

            return visibleTickets;
        } catch (error) {
            console.error('Ошибка при загрузке билетов:', error);
            throw error;
        }
    })
const ticketsSlice = createSlice({
    name : 'tickets',
    initialState : {
        ticketsData : [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTickets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTickets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.ticketsData = action.payload;
            })
            .addCase(getTickets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default ticketsSlice.reducer;
export { getTickets };
