import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Orders from "./pages/Admin/Orders";
import Reservations from "./pages/Admin/Reservations";
import Users from "./pages/Admin/Users";
import Staff from "./pages/Admin/Staff";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import LoyaltyRewards from "./pages/LoyaltyRewards";

function App() {
  // Get user role from localStorage or set to null if not set
  const userRole = localStorage.getItem("userRole");

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/loyalty-rewards" element={<LoyaltyRewards />} />

        {/* Protected Routes for Admin */}
        <Route
          path="/admin-dashboard"
          element={userRole === "Admin" ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin-dashboard/orders"
          element={userRole === "Admin" ? <Orders /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin-dashboard/reservations"
          element={userRole === "Admin" ? <Reservations /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin-dashboard/users"
          element={userRole === "Admin" ? <Users /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin-dashboard/staff"
          element={userRole === "Admin" ? <Staff /> : <Navigate to="/login" />}
        />

        {/* Protected Routes for Normal User */}
        <Route
          path="/home"
          element={userRole === "Normal" ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
