import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNew, voteAnecdote } from './reducers/anecdoteSlice'
import { notifChange } from './reducers/notifReducer'
import { AnList } from './components/AnecdoteList'
import { AnForm } from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const [newAnecdote,setNewAnecdote] = useState("")
  const anecdotes = useSelector(state => state.anecdoteSlice)
  const notification = useSelector(state => state.notifications)
  const dispatch = useDispatch()
  
  const handleNewAnectode = (event) =>{
    setNewAnecdote(event.target.value)
  }

  const addNew = (event) => {
    event.preventDefault()
    dispatch(createNew(newAnecdote))
    dispatch(notifChange(newAnecdote + " added to anecdotes"))
    setTimeout(()=>{
      dispatch(notifChange(""))
    },5000)
  }

  const voter = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(notifChange("Vote received! :)"))
    setTimeout(()=>{
      dispatch(notifChange(""))
    },5000)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification notification={notification}/>
      <AnList anecdotes={anecdotes} voter={voter}/>      
      <h2>create new</h2>
      <AnForm handleNewAnectode={handleNewAnectode} addNew={addNew}/>
    </div>
  )
}

export default App