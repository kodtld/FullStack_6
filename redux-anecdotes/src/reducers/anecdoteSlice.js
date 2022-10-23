import { createSlice } from "@reduxjs/toolkit";
const getId = () => (100000 * Math.random()).toFixed(0)

export const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers:{
        createNew: (state, action) => {
            state.push(action.payload)
        },
        appendAnecdote(state, action) {
            console.log("append", action.payload)
            state.push(action.payload)
          },
        
        setAnecdototes(state, action) {
            return action.payload
          },
        voteAnecdote: (state, action) => {
            const id = action.payload
            const  anToChange = state.find(n => n.id === id)
            const changedAnecdote = { 
                ...anToChange, 
                votes: anToChange.votes +1 
            }
            
            let newmap = state.map(note =>
                note.id !== id ? note : changedAnecdote 
            )

            console.log(newmap)

            return newmap.slice().sort(function(a, b) {
                if (a.votes > b.votes) return -1;
                if (a.votes < b.votes) return 1;
                return 0;
            });

        }
    }
});

export const {createNew, voteAnecdote,appendAnecdote,setAnecdototes} = anecdoteSlice.actions;

export default anecdoteSlice.reducer;