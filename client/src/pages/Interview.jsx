/**
 * Route: /company/:id/:id
 *
 * The interview page displays the timelines, reviews,
 * and other data related to this specified position.
 */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Req from "../utils/Req";
import FrequencyMap from "../utils/FrequencyMap";
import FrequencyChart from "../components/FrequencyChart";
import axios from "axios";

const Interview = () => {
  const [data, setData] = useState(new FrequencyMap());
  const { Iid, id } = useParams();
  const [interviewDataPoints, setInterviewDataPoints] = useState();
  const [interview, setInterview] = useState();
  const [avg, setAvg] = useState(0);
  const [entries, setEntries] = useState(0);

  useEffect(() => {
    const load = async () => {
      //get name of interview based on id
      const interviewData = await Req.get(`/interview/${Iid}`);
      if (interviewData) {
        setInterview(interviewData);
      }

      const interviewDataPoints = await Req.getInterviewDataPoints(
        `/data/event/${Iid}`
      );
      console.log(interviewDataPoints);

      if (interviewDataPoints) {
        // console.log(`HERE, interview data points: ${interviewData.rollingSum}`);
        setInterviewDataPoints(interviewDataPoints);
        const dataValues = new FrequencyMap();
        interviewDataPoints.forEach((element) => {
          dataValues.addData(element.daysSinceApplication);
        });
        // setAvg(sum / interviewData.rollingSum);
        setData(dataValues);
      }
    };

    load();
  }, [Iid]);

  return (
    <>
      <h1>{interview ? interview.eventName : "Error"}</h1>
      <a href={`/company/${id}`}>
        <h3>{interview ? interview.companyName : "Error"}</h3>
      </a>
      <hr />

      <FrequencyChart title={"Application Response Frequency"} data={data} />

      <div>Data Entries: {entries}</div>
      <div>Average Days Since Application: {avg}</div>
    </>
  );
};

export default Interview;
