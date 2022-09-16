import React from "react";
// import Fractions from "./features/fractions/Fractions";
import './App.css';

import { Notification, Color } from "./notify";

function App() {
  const [notifications, setNotifications] = React.useState<any[]>([]);
  const createNotification = (color:string) => {
    setNotifications([...notifications, { color, id: notifications.length }]);
    console.log(color)
  }
  const deleteNotification = (id:any) =>
  setNotifications(
    notifications.filter((notification) => notification.id !== id)
  );
  return (
    <div className="App">
      <header className="App container">
        {/* <Fractions /> */}

        <button onClick={() => createNotification(Color.info)}>Info</button>
        <button onClick={() => createNotification(Color.success)}>Sucess</button>
        <button onClick={() => createNotification(Color.warning)}>Warning</button>
        <button onClick={() => createNotification(Color.error)}>Error</button>
        {notifications.map(({ id, color }) => (
        <Notification 
        key={id} 
        color={color} 
        onDelete={() => deleteNotification(id)}
        autoClose={true}
        >
          THIS IS A NOTIFICATION
        </Notification>
      ))}
      </header>
    </div>
  );
}

export default App;
