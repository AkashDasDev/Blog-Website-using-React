import { useState } from "react"
import "./register.css"

export default function Register() {
  const [first, setfirst] = useState(second)
  
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
        <form className="registerForm">
        <label>UserName</label>
        <input type="text" className="registerInput" placeholder="Enter your username..." />

        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
        </form>
        <button className="registerLogButton">Login</button>

    </div>
  )
}
