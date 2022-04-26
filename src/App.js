import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { onAuthStateChanged} from "firebase/auth";
import {auth} from './utils/firebase'


function App() {

  const {setCurrentUser, setLoading} = useContext(AppContext)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  })
  return (
    <div>
        <AppRouter />
        <ToastContainer />
    </div>
  );
}

export default App;
