import { createSlice } from '@reduxjs/toolkit'
import { getId } from '../services/id'

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find(a => a.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1
      }
    },
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, createAnecdote, appendAnecdote, setAnecdotes } = anecdotesSlice.actions

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