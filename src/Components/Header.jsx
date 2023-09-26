import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";
const Header = () => {
     const navigation = useNavigation();
     
     return (
          <div>
          <nav className="flex gap-5 text-lg font-medium justify-center mt-4">
               <NavLink to={'/'}className="hover:bg-gray-400">Home</NavLink>
               <NavLink to={'/about'} className="hover:bg-gray-400">About</NavLink>
               <NavLink to={'/contact'} className="hover:bg-gray-400">Contact</NavLink>
               <NavLink to={'/users'} className="hover:bg-gray-400">Users</NavLink>
               <NavLink to={'/posts'} className="hover:bg-gray-400">Posts</NavLink>
               </nav>
     <div>
          {
               navigation.state === "loading"? <Loading></Loading>:<Outlet></Outlet>
          }
          
     </div>
    <div>
     <h2 className=" text-7xl font-semibold text-center mt-10">This is Footer</h2>
    </div>
     </div>
     );
};

export default Header;