import { useEffect } from "react";
import { useState } from "react";

const Grid = () => {
   return (
      <div className="w-100 h-100" style={{
         backgroundImage: "repeating-linear-gradient(black 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, black 0 1px, transparent 1px 100%)",
         backgroundSize: "20px 20px",
         backgroundPosition: "bottom left"
      }} />
   );
}

const Node = ({ x, y, color }) => {
   return (
      <div className="position-absolute border border-dark bottom-0"
         style={{ width: '20px', top: `${100 - x}%`, left: `${y}%`, backgroundColor:`#${color ? color : 'ffffff'}` }}
      />
   );
}

const Guides = ({ maxX, maxY }) => {
   const slices = 10;
   const xVals = [];
   const yVals = [];

   const xSlice = -maxX / slices;
   const ySlice = -maxY / slices;
   for (var i = 0; i < slices; i++) {
      xVals.push(Math.round(100 * (maxX + i * xSlice)) / 100);
      yVals.push(Math.round(100 * (maxY + i * ySlice)) / 100);
   }

   return (
      <>
         <div className="position-absolute end-0 d-flex" style={{bottom:'-30px'}}>
            {xVals.map((value, index) => {
               return (
                  <div className="text-muted" key={`Row${index}`} style={{left:`${0}%`}}>{value}</div>
               )
            })}
         </div>

         <div className="position-absolute top-0" style={{left:'-50px'}}>
            {yVals.map((value, index) => {
               return (
                  <div className="text-muted" key={`Col${index}`} style={{bottom:`${0}%`}}>{value}</div>
               )
            })}
         </div>
      </>
   );
}

const FrequencyChart = ({ title, data, color }) => {
  const [maxX, setX] = useState(-1);
  const [maxY, setY] = useState(-1);
  const [dataNodes, setNodes] = useState([]);

  useEffect(() => {
    if (data) {
      const maxX = data.maxValue;
      setX(maxX);
      const maxY = data.maxFrequency;
      setY(maxY);
      const set = data.getData;

      const render = [];
      for (const key in set) {
        const xp = 90 * (set[key] / maxX);
        const yp = 90 * (Number(key) / maxY);
        render.push(<Node x={xp} y={yp} key={key} color={color} />);
      }
      setNodes(render);
    }
  }, [data, color]);

   return (
      <>
         <h4>{title}</h4>
         <div className="w-100 ps-5 pb-5 mb-1" style={{height:'400px'}}>
            <div className="w-100 h-100 bg-light position-relative"
            style={{ border:'2px solid black' }}>
               <Grid />
               <Guides maxX={maxX} maxY={maxY} />
               {dataNodes}
            </div>
         </div>
      </>
   );
 };
 
 export default FrequencyChart;
 
