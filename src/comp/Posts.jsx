import "../styles/Posts.css";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="posts">
      <Post img="https://images.unsplash.com/photo-1649172196893-33b5d8cf2bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1682536460259-b40cef108baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1682186353789-66c30928bdfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1563283730-9a0dafc3c51f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" />
      <Post img="https://images.unsplash.com/photo-1682337913785-c81be90f01d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Post img="https://images.unsplash.com/photo-1577688723008-7c501eae6f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5JTIwY2xvdWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    </div>
  );
};

export default Posts;
