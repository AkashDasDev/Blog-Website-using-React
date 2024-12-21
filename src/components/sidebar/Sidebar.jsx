import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fHww"  
          alt=""  />
          <p>This is My First Blog Website Using Reactjs.
             Anyway I think this website is very helpful
             for your thinking which help you to write a
             blog into this.
          </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
    </div>
  )
}
