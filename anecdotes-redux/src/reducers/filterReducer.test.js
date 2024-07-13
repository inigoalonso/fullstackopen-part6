import deepFreeze from 'deep-freeze'
import filterReducer from './filterReducer'

describe('filterReducer', () => {
  test('returns new state with action filters/setFilter', () => {
    const state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          important: false,
          id: 1
        },
        {
          content: 'Adding manpower to a late software project makes it later!',
          important: false,
          id: 2
        },
        {
          content: 'Premature optimization is the root of all evil',
          important: false,
          id: 3
        }
      ],
      filter: ''
    }
    const action = {
      type: 'filters/setFilter',
      payload: 'Premature',
    }

    deepFreeze(state)
    const newState = filterReducer(state, action)

    expect(newState.filter).toContainEqual('Premature')
  })

  test('returns new state with action filters/toggleImportanceOf', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        important: true,
        id: 1
      },
      {
        content: 'state changes are made with actions',
        important: false,
        id: 2
      }]
  
    const action = {

      type: 'filters/toggleImportanceOf',
      payload: 2
    }
  
    deepFreeze(state)
    const newState = filterReducer(state, action)
  
    expect(newState).toHaveLength(2)
  
    expect(newState).toContainEqual(state[0])
  
    expect(newState).toContainEqual({
      content: 'state changes are made with actions',
      important: true,
      id: 2
    })
  })
})