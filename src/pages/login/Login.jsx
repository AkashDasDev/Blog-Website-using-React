import "./login.css"

export default function Login() {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
        <form className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
        </form>
        <button className="loginRegButton">Register</button>
        <img
        src="/images/test.jpeg" // Path relative to the 'public' folder
        alt="Example"
        style={{ width: "300px", height: "auto", borderRadius: "10px" }}
      />
    </div>
  )
}
