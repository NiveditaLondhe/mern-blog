import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import FooterCom from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute/>}> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}
 