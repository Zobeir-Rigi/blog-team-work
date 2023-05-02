import "../styles/SideBar.css"

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">About Me</span>
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gd5a50Csu9aE895kJIC8B82WhuSxvGTEpE9hCHvmosluk7Lk5dH7ektc8UuTBHwI7oI&usqp=CAU"
          className="sideBarImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa
          fugiat magnam aspernatur officiis odio ad,
        </p>
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook"></i>
          <i className="sideBarIcon fa-brands fa-square-twitter"></i>
          <i className="sideBarIcon fa-brands fa-square-pinterest"></i>
          <i className="sideBarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar