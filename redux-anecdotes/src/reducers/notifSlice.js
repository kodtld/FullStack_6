import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

export const notifSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        setNotification: (state, action) => {
            return action.payload
        }
    }
});

export const {setNotification} = notifSlice.actions;

export default notifSlice.reducer;