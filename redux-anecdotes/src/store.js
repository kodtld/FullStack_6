import { configureStore } from '@reduxjs/toolkit'
import anecdoteSlice from './reducers/anecdoteSlice'
import notifReducer from './reducers/notifReducer'

const readystore = configureStore({
    reducer:{
    anecdoteSlice:anecdoteSlice,
    notifications:notifReducer}})

export default readystore