import seriesData from "../api/seriesData.json";
import { SereisCard } from "./SereisCard";

const NetflixSeries =()=>{
    return(
        <ul className="grid grid-three-cols">
            {seriesData.map((curElem)=>(
               <SereisCard key={curElem.id} data={curElem}/>

                
            ))};
        </ul>
   );
};
   export default NetflixSeries;