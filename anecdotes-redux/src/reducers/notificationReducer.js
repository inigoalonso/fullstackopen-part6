import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Notification goes here'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotification: (state, action) => action.payload,
    clearNotification: () => '',
  },
})

export const { changeNotification: changeNotification, clearNotification } = notificationSlice.actions

// Thunk for setting notification with timeout
export const setNotification = (message, timeInSeconds) => {
  return dispatch => {
    dispatch(changeNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeInSeconds * 1000)
  };
};

export default notificationSlice.reducer
