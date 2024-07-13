import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Notification goes here'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => action.payload,
    clearNotification: () => '',
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
