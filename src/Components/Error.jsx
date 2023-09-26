import { useNavigate, useRouteError } from "react-router-dom";


const Error = () => {
     const navigate = useNavigate();
     const error = useRouteError();
     console.log(error);
     const handleBack =()=>{
          navigate("/")
          }
     return (
          <div>
               <h2>{error.data}</h2>
               <h2>{error.status} {error.statusText}</h2>
               <h2 className="text-9xl">Data Not Found</h2>
               <button onClick={handleBack} className="bg-green-400 px-5 py-3 rounded-xl">Go Home</button>
          </div>
     );
};

export default Error;