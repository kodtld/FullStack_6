import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNew, vote } from './reducers/anecdoteReducer'
import { notifChange } from './reducers/notifReducer'
import { AnList } from './components/AnecdoteList'
import { AnForm } from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const [newAnecdote,setNewAnecdote] = useState("")
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  
  const handleNewAnectode = (event) =>{
    setNewAnecdote(event.target.value)
  }

  const addNew = (event) => {
    event.preventDefault()
    dispatch(createNew(newAnecdote))
    dispatch(notifChange("JEssiiirr"))
  }

  const voter = (id) => {
    dispatch(vote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnList anecdotes={anecdotes} voter={voter}/>      
      <h2>create new</h2>
      <AnForm handleNewAnectode={handleNewAnectode} addNew={addNew}/>
    </div>
  )
}

export default App