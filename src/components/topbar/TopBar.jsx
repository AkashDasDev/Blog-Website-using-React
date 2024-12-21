import "./topbar.css";

export default function TopBar() {
  return(
  <div className="top">
    <div className="topLeft"></div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
      </ul>
    </div>
    <div className="topRight">
      <img 
        className="topImg"
        src="https://plus.unsplash.com/premium_photo-1661265944044-bc7248ae54f9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
       <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  )
}
