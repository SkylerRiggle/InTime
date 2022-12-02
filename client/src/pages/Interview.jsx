/** 
 * Route: /company/:id/:id
 * 
 * The interview page displays the timelines, reviews, 
 * and other data related to this specified position.
 */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Req from "../utils/Req";

class FrequencyMap {
  constructor() {
    this.data = {};
  }

  get getData() {
    return this.data;
  }

  addData(value) {
    if (this.data[value.toString()]) {
      this.data[value.toString()] += 1
    } else {
      this.data[value.toString()] = 1
    }
  }

  removeData(value) {
    if (this.data[value.toString()]) {
      this.data[value.toString()] -= 1
    }
  }
}

const Interview = () => {
  const [data, setData] = useState(new FrequencyMap());
  const { Iid, id } = useParams();
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
          const dataValues = new FrequencyMap();
          interviewData.dataPoints.forEach(element => {
            sum += element.daysSinceApplication;
            dataValues.addData(element.daysSinceApplication);
          });
          setAvg(sum / interviewData.rollingSum);
          setData(dataValues);
        }
      }
    }

    load();
  }, [Iid]);

  return (
    <>
      <h1>{interview ? interview.eventName : "Error"}</h1>
      <a href={`/company/${id}`}><h3>{interview ? interview.companyName : "Error"}</h3></a>
      
      <div>Data Entries: {entries}</div>
      <div>Average Days Since Application: {avg}</div>
    </>
  );
};
 
 export default Interview;
 