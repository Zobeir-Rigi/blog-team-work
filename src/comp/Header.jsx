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
        src="https://img2.wallspic.com/crops/4/8/2/7/6/167284/167284-react_js-react-javascript-javascript_library-next_js-5184x3456.jpg"
      />
    </div>
  );
}

export default Header