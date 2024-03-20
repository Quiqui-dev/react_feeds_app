import { useState, useEffect} from 'react'
import AppRoutes from './components/routes/routes'
import {useDispatch, useSelector} from "react-redux"

function App() {

  const currentUser = useSelector( (state) => state.auth.displayName)

  useEffect( () => {
    console.log(currentUser)
  }, [currentUser])

  return (
    <AppRoutes>
    </AppRoutes>
  )
}

export default App;
