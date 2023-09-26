import { Link, useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
     const post = useLoaderData();
     const navigate = useNavigate();
     const handleBack = ()=>{
          navigate(-1)
     }
     return (
          <div>
               <h2>Post Datails: </h2>
               <h2>UserID: {post.userId}</h2>
               <h2>User Title: {post.title}</h2>
               <button onClick={handleBack} className="bg-gray-400 px-3 py-2 rounded-lg">Go Back</button>
          </div>
     );
};

export default PostDetails;