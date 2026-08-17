import { Routes, Route } from "react-router-dom"
import Home from "./pages/home.tsx"
import Dashboard from "./pages/dashboard.tsx"
import Login from "./pages/Login.tsx"
import SignUp from "./pages/signUp.tsx"
import Profile from "./pages/profile.tsx"
import Skills from "./pages/skills.tsx"
import Users from "./pages/users.tsx" 
import SwapDetail from "./pages/SwapDetail.tsx"
import Swaps from "./pages/swaps.tsx"
import Admin from "./pages/admin.tsx"
import UserProfile from "./pages/UserProfile.tsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/swaps" element={<Swaps />} />
      <Route path="/users" element={<Users />} />
      <Route path="/swap/:id" element={<SwapDetail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/userProfile/:id" element={<UserProfile />} />
    </Routes>
  )
}

export default App
