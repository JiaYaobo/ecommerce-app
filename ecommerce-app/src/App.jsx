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
import Profile from "./pages/Profile";
import Announcement from "./components/Announcement";
import Ship from "./pages/Ship";
import Store from "./pages/Store";
import Edit from "./pages/Edit.jsx";
import Messenger from "./pages/Messenger";
import SearchPage from "./pages/SearchPage";

function App() {
  const user = useSelector((state) => {
    return state.user.currentUser;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Announcement />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={user ? <Cart /> : <Login />} />
          <Route
            exact
            path="/message"
            element={user ? <Messenger /> : <Login />}
          />
          <Route
            exact
            path="/products/all"
            element={user ? <ProductList /> : <Login />}
          />
          <Route
            exact
            path="/product/:productId"
            element={user ? <Product /> : <Login />}
          />
          <Route exact path="/me" element={user ? <Profile /> : <Login />} />
          <Route
            exact
            path="/order/:orderId/ship"
            element={user ? <Ship /> : <Login />}
          />
          <Route exact path="/store/:storeId" element={<Store />} />
          <Router exact path="/edit" element={user ? <Edit /> : <Login />} />
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
          <Route
            exact
            path="/search"
            element={user ? <SearchPage /> : <Login />}
          />
        </Routes>
        {user && <Newsletter />}
        {user && <Footer />}
      </Router>
    </>
  );
}

export default App;
