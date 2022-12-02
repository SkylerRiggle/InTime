/** 
 * Route: /company/:id/:id
 * 
 * The interview page displays the timelines, reviews, 
 * and other data related to this specified position.
 */

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Req from "../utils/Req";

const Interview = () => {
  const { Iid } = useParams();
  const [interview, setInterview] = useState();
  const [avg, setAvg] = useState(0);
  const [entries, setEntries] = useState(0);

  useEffect(() => {
    const load = async () => {
      const interviewData = await Req.get(`/interview/${Iid}`);
      if (interviewData) {
        setInterview(interviewData);
        setEntries(interviewData.rollingSum);

        if (interviewData.dataPoints && interviewData.rollingSum > 0) {
          let sum = 0;
          interviewData.dataPoints.forEach(element => {
            sum += element.daysSinceApplication;
          });
          setAvg(sum / interviewData.rollingSum);
        }
      }
    }

    load();
  }, [Iid]);

  return (
    <>
      <h1>{interview ? interview.eventName : "Error"}</h1>
      <h3>{interview ? interview.companyName : "Error"}</h3>

      <div>Data Entries: {entries}</div>
      <div>Average Days Since Application: {avg}</div>
    </>
  );
};
 
 export default Interview;
 