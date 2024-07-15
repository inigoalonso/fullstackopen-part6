export const notificationHandler = (dispatch, message) => {
  clearTimeout(notificationHandler.timeout)
  dispatch({ type: "SET_NOTIFICATION", payload: message })
  notificationHandler.timeout = setTimeout(() => {
    dispatch({ type: "CLEAR_NOTIFICATION" })
  }, 5000)
}

notificationHandler.timeout = null