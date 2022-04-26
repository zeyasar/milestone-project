import BlogForm from '../components/BlogForm'
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { addBlog } from '../utils/firebase';
import {
    toastErrorNotify,
    toastSuccessNotify,
  } from "../utils/toastNotify";
import { useNavigate } from 'react-router-dom';



const NewBlog = () => {
  let { currentUser} = useContext(AppContext)
  const navigate = useNavigate()
  
  const initialValues={
    author: currentUser.displayName,
    header: "",
    subtitle: "",
    content: "",
    imageUrl: "",
    published_date: Date.now(),
}

const [info, setInfo] = useState(initialValues);

    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        try {
            addBlog(info);
            navigate("/");
            toastSuccessNotify("Blog added successfully!");
            setInfo(initialValues)
          } catch (error) {
            console.log("Error", error);
            toastErrorNotify('Oops...There was a problem!')
          } 
      }

    return (
        <div>
            <BlogForm info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
        </div>
    )
}
export default NewBlog