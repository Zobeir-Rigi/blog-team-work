import "../styles/SinglePost.css";

function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        <img
          src="https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostinfo">
          <span className="singlePostAuthor">
            Author: <b>Team-Work</b>
          </span>
          <span className="singlePostAuthor">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          debitis perferendis sequi animi deleniti eaque veniam possimus sit
          dicta veritatis harum tempore deserunt, ad ab provident cupiditate
          consequuntur sunt illum.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Assumenda debitis perferendis sequi animi deleniti
          eaque veniam possimus sit dicta veritatis harum tempore deserunt, ad
          ab provident cupiditate consequuntur sunt illum.Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Assumenda debitis perferendis sequi
          animi deleniti eaque veniam possimus sit dicta veritatis harum tempore
          deserunt, ad ab provident cupiditate consequuntur sunt illum.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Assumenda debitis
          perferendis sequi animi deleniti eaque veniam possimus sit dicta
          veritatis harum tempore deserunt, ad ab provident cupiditate
          consequuntur sunt illum.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
