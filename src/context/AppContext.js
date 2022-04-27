import { createContext, useState, useEffect} from "react";
import React from "react";
// eslint-disable-next-line
import firebase, {auth} from "../utils/firebase";
import { getDatabase, onValue, ref} from "firebase/database";
import { onAuthStateChanged} from "firebase/auth";


export const AppContext = createContext();


const AppContextProvider = ({ children }) => {

  let [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    })
    return () => {
      unsubscribe()
    }
  },[currentUser])
  // eslint-disable-next-line
  const [loading, setLoading] = useState();
  const [blogList, setBlogList] = useState();
   

  useEffect(() => {
    const db = getDatabase();
    const blogRef=ref(db,"newsData");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];

      for(let id in data){
          blogArray.push({id,...data[id]})
      }
      setBlogList(blogArray);
    
  })
  }, [])

  function getBlogDetail(id) {
    const result = blogList?.filter((item) => item.id === id);
    return result;
  }

  

  const value = {
    currentUser,
    setCurrentUser,
    setLoading,
    blogList,
    loading,
    getBlogDetail,
  }
  

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;