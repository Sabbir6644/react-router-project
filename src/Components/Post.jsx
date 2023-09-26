import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
     const navigate =useNavigate();
     const {id, title, body}=post;
const showDetails = ()=>{
     navigate(`/posts/${id}`)
}
     return (
          <div className="bg-green-200 border-2">
             <h2>Post Title: {title}</h2>
             <h2>Post Body: {body}</h2>
             <Link to={`/posts/${id}`}><button className="py-2 px-4 rounded-lg bg-gray-500">Details</button></Link>
             <button onClick={showDetails} className="btn">Show Details</button>

          </div>
     );
};

export default Post;