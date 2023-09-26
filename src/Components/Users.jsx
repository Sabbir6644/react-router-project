import { useLoaderData } from "react-router-dom";
import User from "./user";

const Users = () => {
     const users = useLoaderData();
     return (
        <div>
            <div className="text-center mt-10 font-semibold text-5xl">
              <h2>This is Users Page</h2>
              <h2>Total Users: {users.length}</h2>
         </div>
         <div  className=" grid grid-cols-3 gap-4">
             {
               
               users.map(user => <User key={user.id} user={user}></User>)
              }
             </div>
        
        </div>
     );
};

export default Users;