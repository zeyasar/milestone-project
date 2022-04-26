import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../utils/toastNotify";
import { getDatabase, push, ref, set, update, remove } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signup = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    toastSuccessNotify("Registered successfully!");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
  }
};

export const login = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
  }
};

export const logout = () => {
  signOut(auth);
  toastSuccessNotify("Logged out successfully!");
};


export const loginWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const forgotPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      toastWarnNotify("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
    });
};

export const addBlog=(info)=>{
  const db = getDatabase();
  const blogRef=ref(db,"newsData");
  const newBlogRef=push(blogRef)
  set((newBlogRef),{
      ...info,
      header: info.header,
      subtitle: info.subtitle,
      content: info.content,
      imageUrl: info.imageUrl,
  })
}

export const EditBlog=(info)=>{
  const db = getDatabase();
  const updates = {};

  updates["newsData/"+info.id]=info;
  return update(ref(db),updates);

}

export const DeleteUser = (id) => {
  const db = getDatabase();
  remove(ref(db,"newsData/"+id))
  toastSuccessNotify("Blog has been deleted successfully")
}