import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => {
    return state.user.currentUser;
  });
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
