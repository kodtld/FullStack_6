const AnList = (props) =>{
    const voter = props.voter
    const anecdotes = props.anecdotes
    return(
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voter(anecdote.id)}>vote</button>
        </div>
      </div>
  ))};
  
  export {AnList}