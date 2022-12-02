import { useEffect } from "react";
import { useState } from "react";

const Grid = () => {
   return (
      <div className="w-100 h-100" style={{
         backgroundImage: "repeating-linear-gradient(black 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, black 0 1px, transparent 1px 100%)",
         backgroundSize: "20px 20px",
         backgroundPosition: "bottom left"
      }}/>
   )
}

const Node = ({ x, y }) => {
   return (
      <div className="position-absolute bg-danger bottom-0"
         style={{ width: '20px', top:`${100 - x}%`, left:`${y}%` }}
      />
   )
}

const FrequencyChart = ({ title, data }) => {
   const [dataNodes, setNodes] = useState([]);

   useEffect(() => {
      if (data) {
         const maxX = data.maxValue;
         const maxY = data.maxFrequency;
         const set = data.getData;

         const render = [];
         for (const key in set) {
            const xp = 90 * (set[key] / maxX);
            const yp = 90 * (Number(key) / maxY);
            console.log(xp, yp)
            render.push(
               <Node x={xp} y={yp} key={key} />
            )
         }
         setNodes(render);
      }
   }, [data])

   return (
      <>
         <h4>{title}</h4>
         <div className="w-100 bg-light position-relative"
         style={{ height: '400px', border:'5px solid black' }}>
            <Grid />
            {dataNodes}
         </div>
      </>
   );
 };
 
 export default FrequencyChart;
 