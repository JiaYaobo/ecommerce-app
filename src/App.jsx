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
import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import User from "./pages/User";

function App() {
  const user = useSelector((state) => {
    return state.user.currentUser;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Router>
        {user && <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        {user && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route exact path="/cart" element={user ? <Cart /> : <Login />} />
          <Route
            exact
            path="/products/all"
            element={user ? <ProductList /> : <Login />}
          />
          <Route
            exact
            path="/product/1"
            element={user ? <Product /> : <Login />}
          />
          <Route exact path="/me" element={user ? <User /> : <Login />} />
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
        {user && <Newsletter />}
        {user && <Footer />}
      </Router>
    </>
  );
}

export default App;
