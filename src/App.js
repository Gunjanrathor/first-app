import Calculator2 from "./routes/calculator2/calculator2.component";
import MovieList from "./routes/movielist/movielist";

import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in";
import Home from "./routes/home/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="home" element={<Home />} />
      <Route path="calculate" element={<Calculator2 />} />
      <Route path="movielist" element={<MovieList />} />
      
    </Routes>
  );
};

export default App;
