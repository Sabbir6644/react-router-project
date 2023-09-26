import { useContext, useEffect } from "react";
import { FormDataContext } from "./ContactForm";

const Details = () => {
    const collectedData = useContext(FormDataContext);

useEffect(() => {
     console.log(collectedData);
   }, [collectedData]);
   console.log(collectedData);
     return (
          <div>
               <h2>sdoijk fgpoKSAF</h2>
          </div>
     );
};

export default Details;


