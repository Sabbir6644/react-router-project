import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FormDataContext = createContext();

const ContactForm = () => {
     const [formData, setFormData]= useState({});

     useEffect(() => {
          console.log(formData);
        }, [formData]);
     const handleSubmit = e=>{
          e.preventDefault();
          const data={
               Name: e.target.name.value,
               Email: e.target.email.value
          }
          
          setFormData(data);
          console.log(formData);
          
     }
     return (
          <div className="flex justify-center">
<div>
<form onSubmit={handleSubmit}>
          <input className="border border-black my-1"  type="text" name="name" placeholder="Name"/>  
             <br />
             <input className="border border-black" type="email" name="email" placeholder="Email"/>
             <br /> 
             <input className="bg-green-400 px-3 " type="submit" value="Submit" />
          </form>
          <FormDataContext.Provider value={formData}>
          <Link to={'/Details'}>Details</Link>
          </FormDataContext.Provider>
                    
</div>
          </div>
     );
};

export default ContactForm;
