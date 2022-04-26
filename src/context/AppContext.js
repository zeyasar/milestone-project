import { createContext, useState, useEffect} from "react";
import React from "react";
// eslint-disable-next-line
import firebase from "../utils/firebase";
import { getDatabase, onValue, ref} from "firebase/database";

export const AppContext = createContext();


const AppContextProvider = ({ children }) => {

  let [currentUser, setCurrentUser] = useState(null);
  // eslint-disable-next-line
  const [loading, setLoading] = useState();
  const [blogList, setBlogList] = useState();
   
  if (!currentUser){
    currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

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