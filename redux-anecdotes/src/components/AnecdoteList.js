const AnList = (props) =>{
    const voter = props.voter
    const unsortedAnecdotes = props.anecdotes
    const anecdotes = unsortedAnecdotes.slice().sort(function(a, b) {
      if (a.votes > b.votes) return -1;
      if (a.votes < b.votes) return 1;
      return 0;})
    return(
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voter(anecdote)}>vote</button>
        </div>
      </div>
  ))};
  
  export {AnList}