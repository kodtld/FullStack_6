import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNew, voteAnecdote, setAnecdototes } from './reducers/anecdoteSlice'
import { setNotification } from './reducers/notifSlice'
import { AnList } from './components/AnecdoteList'
import anecdoteService from './services/anecdotes'
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
  
  useEffect(() => {
    anecdoteService
    .getAll().then(anecdotes => dispatch(setAnecdototes(anecdotes))
      )
  }, [dispatch])


  const addNew = async (event) => {
    event.preventDefault()
    const content = newAnecdote
    console.log(content)
    const addedAnecdote = await anecdoteService.pushNew(content)
    dispatch(createNew(addedAnecdote))
    dispatch(setNotification(newAnecdote + " added!"))
    
    setNewAnecdote("")
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