import { useContext, useEffect } from 'react'
import { useNotificationDispatch, useNotificationValue } from '../NotificationContext'

const Notification = () => {

  const notification = useNotificationValue()
  const dispatch = useNotificationDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
      }, 5000);
    }
  }, [notification, dispatch])

  if (notification) {
    return (
      <div style={style}>
        {notification}
        {/* <span style={{ float: 'right' }} onClick={() => dispatch({ type: 'CLEAR_NOTIFICATION' })}>x</span> */}
      </div>
    )
  } else {
    return null
  }
}

export default Notification
