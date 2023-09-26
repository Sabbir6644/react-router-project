import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
     const {id} = useParams();
     console.log(id);
     const navigate= useNavigate();
const userDetail = useLoaderData();
const handleBack =()=>{
navigate(-1)
}
     return (
          <div className="border-2 text-center font-semibold">
               <h2 className="text-xl">UserName: {userDetail.username}</h2>
               <h2>Phone: {userDetail.phone}</h2>
               <h2>Website: {userDetail.website}</h2>
               <button onClick={handleBack}>Back</button>
          </div>
     );
};

export default UserDetails;