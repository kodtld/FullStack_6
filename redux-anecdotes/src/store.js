import { configureStore } from '@reduxjs/toolkit'
import anecdoteSlice , { setAnecdototes } from './reducers/anecdoteSlice'
import notifSlice from './reducers/notifSlice'
import anecdoteService from './services/anecdotes'


const readystore = configureStore({
    reducer:{
    anecdoteSlice:anecdoteSlice,
    notifSlice:notifSlice}})

anecdoteService.getAll().then(anecdotes =>
    readystore.dispatch(setAnecdototes(anecdotes))
    )
      


export default readystore