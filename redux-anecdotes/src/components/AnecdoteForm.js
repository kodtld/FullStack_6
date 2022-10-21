const AnForm = (props) => {
  const addNew = props.addNew
  const handleNewAnectode = props.handleNewAnectode

  return(  
    <form onSubmit={addNew}>    
    <div><input onChange={handleNewAnectode}/></div>
    <button type='submit'>create</button>
    </form>)
}

export {AnForm}