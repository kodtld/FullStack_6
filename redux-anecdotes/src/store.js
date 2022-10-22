import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/anecdoteReducer'
import notifReducer from './reducers/notifReducer'

const readystore = configureStore({reducer:{
    anecdotes:reducer,
    notifications:notifReducer}})

export default readystore