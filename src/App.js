import { observer } from 'mobx-react-lite'; 
import './App.css';
import AppRouter from './routes/AppRouter';
import NavBar from './components/navbar/NavBar.js';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';
import loadingGif from './assets/giphy.gif'; 


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      })
      .catch(error => {
        // Handle the error silently or provide a general message
        console.error("Authentication check failed:", error); // This logs the error but doesn't show it in the UI
        // Optionally: set some state here to show a user-friendly message if desired
    })
      .finally(() => setLoading(false))
    }, 1000)
  }, [])

  if(loading){
    return (
      <div className="AppLoading">
          <img src={loadingGif} alt="Loading..."/>;
          {/* ... other components ... */}
      </div>
    )
      
  }
  
  return (
    <div className="App">
      <NavBar/>
      <AppRouter/>
    </div>
  );
})

export default App; 