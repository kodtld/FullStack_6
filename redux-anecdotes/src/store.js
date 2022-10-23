import { configureStore } from '@reduxjs/toolkit'
import anecdoteSlice from './reducers/anecdoteSlice'
import notifSlice from './reducers/notifSlice'

const readystore = configureStore({
    reducer:{
    anecdoteSlice:anecdoteSlice,
    notifSlice:notifSlice}})

export default readystore