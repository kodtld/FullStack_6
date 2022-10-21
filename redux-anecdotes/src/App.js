import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const [newAnecdote,setNewAnecdote] = useState("")
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  const createNew = (event) =>{
    event.preventDefault()
    const getId = () => (100000 * Math.random()).toFixed(0)
    dispatch({
      type: 'ADD',
      data:{
        content: newAnecdote,
        id: getId(),
        votes: 0
      }
    })
  }

  const handleNewAnectode = (event) =>{
    setNewAnecdote(event.target.value)
  }

  const vote = (id) => {
    dispatch({
      type: 'VOTE',
      data: { id }
    })
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={createNew}>    
        <div><input onChange={handleNewAnectode}/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App