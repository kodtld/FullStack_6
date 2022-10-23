import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNew, voteAnecdote } from './reducers/anecdoteSlice'
import { setNotification } from './reducers/notifSlice'
import { AnList } from './components/AnecdoteList'
import { AnForm } from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const [newAnecdote,setNewAnecdote] = useState("")
  const anecdotes = useSelector(state => state.anecdoteSlice)
  const notification = useSelector(state => state.notifSlice)
  const dispatch = useDispatch()
  
  const handleNewAnectode = (event) =>{
    setNewAnecdote(event.target.value)
  }

  const addNew = (event) => {
    event.preventDefault()
    dispatch(createNew(newAnecdote))
    dispatch(setNotification(newAnecdote + " added to anecdotes"))
    setTimeout(()=>{
      dispatch(setNotification(""))
    },5000)
  }

  const voter = (id) => {
    dispatch(voteAnecdote(id))
    dispatch(setNotification("Vote received! :)"))
    setTimeout(()=>{
      dispatch(setNotification(""))
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