import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import Aboutus from "./pages/about";
import OrderDetails from "./pages/order-details";
import Paymentpage from "./pages/payment";
import TopBar from "./component/topbar";
import Profilepage from "./pages/profile";
import Homepagebanner from "./component/banner";

function App() {
  return (
    <>
      <TopBar />
      <Homepagebanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="menu-summary" element={<OrderDetails />} />
        <Route path="payment" element={<Paymentpage />} />
        <Route path="profile" element={<Profilepage />} />
      </Routes>
    </>
  );
}

export default App;
