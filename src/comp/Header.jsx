import "../styles/Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        {/* <span className="headerTitleLg">Blog</span> */}
      </div>
      <img
        className="headerImg"
        alt="headerImg"
        src="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
    </div>
  );
}

export default Header