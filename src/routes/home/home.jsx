import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../../utils/firebase/firebase";

const Home = () => {
  const navigate = useNavigate();

  const handalClick = () => {
    signOut(database).then((value) => {
      console.log(value, "value");
      navigate("/");
    });
  };

  return (
    <div>
      <div>
        <Link to="/calculate">calculate</Link>
        <br />
        <Link to="/movielist">movielist</Link> <br />
        <button onClick={handalClick}>SignOut</button>
      </div>
    </div>
  );
};

export default Home;
