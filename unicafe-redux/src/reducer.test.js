import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  test('zero resets all values', () => {
    const action = {
      type: 'ZERO'
    }
    const state = {
      good: 5,
      ok: 3,
      bad: 2
    }

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })
  })

  test('unknown action does not change anything', () => {
    const action = {
      type: 'UNKNOWN'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual(initialState)
  })

  test('multiple actions are handled', () => {
    const actions = [
      { type: 'GOOD' },
      { type: 'GOOD' },
      { type: 'BAD' },
      { type: 'OK' }
    ]
    const state = initialState

    deepFreeze(state)
    const finalState = actions.reduce(counterReducer, state)
    expect(finalState).toEqual({
      good: 2,
      ok: 1,
      bad: 1
    })
  })

  test('multiple actions are handled, part 2', () => {
    const actions = [
      { type: 'GOOD' },
      { type: 'GOOD' },
      { type: 'BAD' },
      { type: 'OK' },
      { type: 'ZERO' },
      { type: 'BAD' }
    ]
    const state = initialState

    deepFreeze(state)
    const finalState = actions.reduce(counterReducer, state)
    expect(finalState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })
})