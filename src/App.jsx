import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Home from "./pages/dashboard/Home";
import AuthLayout from "./components/layout/AuthLayout";
import Verification from "./pages/auth/Verification";
import Verify from "./pages/auth/Verify";
import AppLayout from "./components/layout/AppLayout";
import Products from "./pages/dashboard/Products";
import Orders from "./pages/dashboard/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="verify-email" element={<Verification />} />
          <Route path="email-verification" element={<Verify />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
