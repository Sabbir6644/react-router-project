import { useLoaderData, useNavigation } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
     const posts = useLoaderData();
     const navigation = useNavigation();
     return (
          <div>
               {
                    navigation.state === "loading"? "Data Loading...": <div><h2 className="text-2xl text-center">Posts: {posts.length}</h2>
                    <div className="grid grid-cols-3">
                    {
                         posts.map((post,index)=><Post key={index} post={post}></Post>)
                    }
                    </div></div>
                    
               }
               
          </div>
     );
};

export default Posts;