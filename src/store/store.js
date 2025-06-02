import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from './tabSlice.js'
import ticketsReducer from './ticketsSlice.js';
import asideFilters from './asideSlice.js';
import butonReducer from "./butonSlice.js";
const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        asideFilters: asideFilters,
        tabs: tabsReducer,
        btn: butonReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['fetchTickets/pending', 'fetchTickets/fulfilled', 'fetchTickets/rejected'],
                ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                ignoredPaths: ['tickets'],
            },
        }),
});

export default store;