import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNew, vote } from './reducers/anecdoteReducer'
import { AnList } from './components/AnecdoteList'
import { AnForm } from './components/AnecdoteForm'

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
      <AnList anecdotes={anecdotes} voter={voter}/>      
      <h2>create new</h2>
      <AnForm handleNewAnectode={handleNewAnectode} addNew={addNew}/>
    </div>
  )
}

export default App