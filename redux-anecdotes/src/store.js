import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/anecdoteReducer'
const readystore = configureStore({reducer:reducer})
export default readystore