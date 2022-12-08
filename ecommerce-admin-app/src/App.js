import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Messenger from "./pages/Messenger";
import WaitOrderList from "./pages/WaitOrderList";
import TransOrderList from "./pages/TransOrderList";
import FinishedOrderList from "./pages/FinishedOrderList";
import VipList from "./pages/VipList";
import Analytics from "./pages/Analytics";
import Feature from "./pages/Feature";
import NewProduct from "./pages/NewProduct";
import NewVip from "./pages/NewVip";
import Vip from "./pages/Vip";

const Container = styled.div`
  display: flex;
  margin: 10px;
`;

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      {user && <Topbar />}
      <Container>
        {user && <Sidebar />}
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route
            path="/products"
            element={user ? <ProductList /> : <Login />}
          />
          <Route
            exact
            path="/messenger"
            element={user ? <Messenger /> : <Login />}
          />
          <Route
            exact
            path="/waitOrders"
            element={user ? <WaitOrderList /> : <Login />}
          />
          <Route
            exact
            path="/transOrders"
            element={user ? <TransOrderList /> : <Login />}
          />
          <Route
            exact
            path="/finishedOrders"
            element={user ? <FinishedOrderList /> : <Login />}
          />
          <Route exact path="/vips" element={user ? <VipList /> : <Login />} />

          <Route
            exact
            path="/analytics"
            element={user ? <Analytics /> : <Login />}
          />

          <Route
            exact
            path="/feature"
            element={user ? <Feature /> : <Login />}
          />

          <Route
            path="/product/:productId"
            element={user ? <Product /> : <Login />}
          />

          <Route path="/vip/:vipId" element={user ? <Vip /> : <Login />} />
          <Route
            exact
            path="/new_product"
            element={user ? <NewProduct /> : <Login />}
          />
          <Route
            exact
            path="/new_vip"
            element={user ? <NewVip /> : <Login />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
