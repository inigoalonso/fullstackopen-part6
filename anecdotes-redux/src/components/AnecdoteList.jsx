import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  Anecdote.propTypes = {
    anecdote: PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    }).isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ anecdotes, filter }) => 
    console.log(anecdotes.anecdotes) ||
    anecdotes.anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  )

  return (
    <div>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote 
          key={anecdote.id} 
          anecdote={anecdote} 
          handleClick={() => 
            dispatch(increaseVote(anecdote.id))
          } 
        />
      )}
    </div>
  )
}

export default AnecdoteList