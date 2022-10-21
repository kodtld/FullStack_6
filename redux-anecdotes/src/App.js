import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNew, vote } from './reducers/anecdoteReducer'

const App = () => {
  const [newAnecdote,setNewAnecdote] = useState("")
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  const handleNewAnectode = (event) =>{
    setNewAnecdote(event.target.value)
  }

  const addNew = (event) => {
    event.preventDefault()
    dispatch(createNew(newAnecdote))
  }

  const voter = (id) => {
    dispatch(vote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voter(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNew}>    
        <div><input onChange={handleNewAnectode}/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App