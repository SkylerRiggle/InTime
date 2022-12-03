/**
 * Route: /company/:id
 *
 * The company page will display all
 * available interview reviews for a company,
 * as well as any other introductory data for the organization.
 */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Req from "../utils/Req";
import Logo from "../images/logo.png";

const InterviewCard = ({ cId, id, eventName, entries, creation, updated }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border border-success rounded p-2 m-2 outlineSwapGreen"
      style={{ width: "300px" }}
      onClick={() => navigate(`/company/${cId}/${id}`)}
    >
      <h3>{eventName}</h3>
      <div>Number Of Entries: {entries}</div>
      <div>Last Updated At: {new Date(updated).toDateString()}</div>
      <div>Created At: {new Date(creation).toDateString()}</div>
    </div>
  );
};

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState();

  useEffect(() => {
    const loadCompany = async () => {
      const companyData = await Req.get(`/company/${id}`);
      if (companyData) setCompany(companyData);
    };

    loadCompany();
  }, [id]);

  return (
    <>
      <div className="d-flex align-items-end mb-5">
        <div
          className="d-flex align-items-center justify-content-center rounded p-1 me-3"
          style={{
            width: "100pt",
            height: "100pt",
            border: `2pt solid #${
              company ? company.color.toString(16) : "000000"
            }`,
          }}
        >
          <img src={Logo} alt="Company-Logo" width="100%" />
        </div>
        <div className="w-75">
          <h2>{company ? company.name : "ERROR"}</h2>
          <hr />
        </div>
      </div>

      <h4>Interview Rounds:</h4>
      <div
        className="d-flex flex-wrap w-100 border rounded"
        style={{ overflowY: "scroll", overflowX: "hidden", maxHeight: "50vh" }}
      >
        {company && company.interviews ? (
          company.interviews.map((interview, i) => {
            return (
              <InterviewCard
                id={interview.id}
                eventName={interview.eventName}
                entries={interview.rollingSum}
                creation={interview.createdAt}
                updated={interview.updatedAt}
                key={`Interview_${i}`}
                cId={id}
              />
            );
          })
        ) : (
          <span className="my-4">No Interviews Available...</span>
        )}
      </div>
    </>
  );
};

export default Company;
