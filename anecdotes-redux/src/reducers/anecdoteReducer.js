import { createSlice } from '@reduxjs/toolkit'
import { getId } from '../services/id'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find(a => a.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1
      }
    },
    createAnecdote(state, action) {
      state.push({
        content: action.payload,
        id: getId(),
        votes: 0
      })
    }
  }
})

export const { voteAnecdote, createAnecdote } = anecdotesSlice.actions

export default anecdotesSlice.reducer

// export const increaseVote = (id) => {
//   return {
//     type: 'VOTE',
//     payload: { id }
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     payload: {
//       content,
//       id: getId(),
//       votes: 0
//     }
//   }
// }

// const anecdoteReducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)

//   let id = null
//   let anecdoteToVote = null
//   let votedAnecdote = null
//   let anecdotesToReturn = null

//   switch (action.type) {
//     case 'VOTE':
//       id = action.payload.id
//       anecdoteToVote = state.find(a => a.id === id)
//       votedAnecdote = {
//         ...anecdoteToVote,
//         votes: anecdoteToVote.votes + 1
//       }
//       anecdotesToReturn = state.map(a => a.id !== id ? a : votedAnecdote)
//       return anecdotesToReturn
//     case 'NEW_ANECDOTE':
//       // add action.payload to state.anecdotes
//       anecdotesToReturn = state.anecdotes.concat(action.payload)
//       return anecdotesToReturn
//     default:
//       return state
//   }
// }

// export default anecdoteReducer