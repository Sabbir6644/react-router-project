import { Link, useParams } from "react-router-dom";

const User = ({user}) => {
     const params = useParams();
     const {id, name, email} = user;
     console.log(params);
     return (
          <div className="border-2 bg-green-300 rounded-lg py-7 px-2 text-center text-xl">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <Link to={`/users/${id}`}><button className="mt-4 rounded-md px-3 py-2 bg-gray-300">Details</button></Link>
          </div>
     );
};

export default User;