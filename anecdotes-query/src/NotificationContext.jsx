import { useReducer, createContext, useContext } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.payload;
    case "CLEAR_NOTIFICATION":
      return null;
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    null
  );

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotificationValue = () => {
  const [notification, notificationDispatch] = useContext(NotificationContext);
  return notification;
};

export const useNotificationDispatch = () => {
  const [notification, notificationDispatch] = useContext(NotificationContext);
  return notificationDispatch;
};

export default NotificationContext;