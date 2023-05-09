import {useState} from 'react'
import './App.css'
import Nav from './components/Nav'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Notifications from './components/Notifications'
  
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [events, setEvents] = useState({
    connection: true,
    volume: 0,
    quality: "high",
  });

  return (
    <>
      <main>
      <Nav />
      {loggedIn ? (
        <>
          <Dashboard
            notifications={notifications}
            setNotifications={setNotifications}
            events={events}
            setEvents={setEvents}
          />
          <Notifications
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </main>
    </>
  )
}

export default App
