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

const Interview = () => {
  const [data, setData] = useState(new FrequencyMap());
  const { Iid, id } = useParams();
  const [interview, setInterview] = useState();
  const [avg, setAvg] = useState(0);
  const [entries, setEntries] = useState(0);
  const [color, setColor] = useState();

  useEffect(() => {
    const load = async () => {
      //get name of interview based on id
      const interviewData = await Req.get(`/interview/${Iid}`);
      if (interviewData) {
        setInterview(interviewData);
      }

      const company = await Req.get(`/company/${interviewData.companyId}`);
      const color = company.color.toString(16);
      setColor(color);

      if (interviewData.dataPoints && interviewData.rollingSum > 0) {
        const dataValues = new FrequencyMap();
        var sum = 0
        interviewData.dataPoints.forEach((element) => {
          dataValues.addData(element.daysSinceApplication);
          sum += element.daysSinceApplication;
        });
        setAvg(sum / interviewData.rollingSum);
        setEntries(interviewData.rollingSum);
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

      <FrequencyChart
        title={"Application Response Frequency"}
        data={data}
        color={color}
      />

      <div>Data Entries: {entries}</div>
      <div>Average Days Since Application: {avg}</div>
    </>
  );
};

export default Interview;
