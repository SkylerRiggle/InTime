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

  useEffect(() => {
    const load = async () => {
      const interviewData = await Req.get(`/interview/${Iid}`);
      setInterview(interviewData);
    }

    load();
  }, [Iid]);

  return (
    <>
      <h1>{interview ? interview.eventName : "Error"}</h1>
      <h3>{interview ? interview.companyName : "Error"}</h3>
    </>
  );
};
 
 export default Interview;
 