import { useState } from "react"
import "./register.css"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const oneEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const storeinLocalStoreage = () => {
    //  Store data in localStorage
    const userData = { email, password };
    let res = localStorage.getItem("userData");
    let arr = JSON.parse(res);
    if(!arr)
      arr=[]
    arr.push(userData);
    localStorage.setItem("userData", JSON.stringify(arr));


  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("use pass", email, password);
    storeinLocalStoreage();
    setEmail("");
    setPassword("");
  };
  
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={oneEmailChange}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onePasswordChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
        <button className="registerLogButton">Login</button>

    </div>
  )
}
