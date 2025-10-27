import ProtectedRoute from "./component/protectedroute";
import Home from "./page/home"
import Login from "./page/login"
import Register from "./page/register";
import "./styles/app.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return(
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            } />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
