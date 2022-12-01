/**
 * Route: /company/:id
 *
 * The company page will display all
 * available interview reviews for a company,
 * as well as any other introductory data for the organization.
 */
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Req from "../utils/Req";
import Logo from '../images/logo.png';

const InterviewCard = ({ eventName }) => {
  return (
    <div className='border border-success rounded p-2 m-2'>
      <h1>{eventName}</h1>
    </div>
  );
}

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState();

  useEffect(() => {
    const loadCompany = async () => {
      const companyData = await Req.get(`/company/${id}`);
      if (companyData) setCompany(companyData);
    }

    loadCompany();
  }, [id])

  return (
    <>
      <div className='d-flex align-items-end mb-5'>
        <div className='d-flex align-items-center justify-content-center rounded p-1 me-3'
          style={{ width: '100pt', height: '100pt', border:`2pt solid #${company ? company.color.toString(16) : "000000"}` }}>
          <img src={Logo} alt="Company-Logo" width="100%" />
        </div>
        <div className='w-75'>
          <h2>{company ? company.name : "ERROR"}</h2><hr/>
        </div>
      </div>

      <h4>Internships:</h4>
      <div className='d-flex flex-column align-items-center w-100 border rounded'
        style={{ overflowY: 'scroll', overflowX: 'hidden', maxHeight: '50vh' }}>
        {company && company.interviews ? company.interviews.map((interview) => {
          return (<InterviewCard eventName={interview.eventName} />)
        }) : <span className="my-4">No Interviews Available...</span>}
      </div>
    </>
  );
};

export default Company;
