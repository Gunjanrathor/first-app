import { database } from "../../utils/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./sign-in.css";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

//import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
        navigate("/home");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Cannot create user,email already in use");
            break;
          case "auth/weak-password":
            alert("Password should be at least 6 characters");
            break;
          case "auth/user-not-found":
            alert("no user associated with this email");
            break;
          default:
            console.log(error);
        }
      });
  };

  return (
    <div className="sign-in-container">
      <h1>Login</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          variant="outlined"
        />
        <br /> <br />
        <TextField
          name="password"
          type="password"
          placeholder="password"
          label="Password"
          variant="outlined"
        />
        <br /> <br />
        <button>Signin</button>
      </form>
    </div>
  );
};
export default SignIn;
