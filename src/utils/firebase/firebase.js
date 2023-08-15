import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import{createUserWithEmailAndPassword} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAwWyVB03jUBainA3TSHFaAf--dg-TJeZg",
  authDomain: "first-react-app-b1d51.firebaseapp.com",
  projectId: "first-react-app-b1d51",
  storageBucket: "first-react-app-b1d51.appspot.com",
  messagingSenderId: "791639098477",
  appId: "1:791639098477:web:9aa50ac7cf34189a9ceb64",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
//   export const createEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;
//   return await createUserWithEmailAndPassword(auth, email, password);
//   }
