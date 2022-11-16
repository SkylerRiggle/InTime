/**
 * Route: /company/:id
 *
 * The company page will display all
 * available interview reviews for a company,
 * as well as any other introductory data for the organization.
 */

import Logo from '../images/logo.png';

const InterviewCard = () => {
  return (
    <div className='border border-success rounded p-2 m-2'>
      <h1>I AM AN EXAMPLE</h1>
    </div>
  );
}

const Company = () => {
  return (
    <>
      <div className='d-flex align-items-end mb-5'>
        <div className='d-flex align-items-center justify-content-center rounded p-1 me-3'
          style={{ width: '100pt', height: '100pt', border:'2pt solid black' }}>
          <img src={Logo} alt="Company-Logo" width="100%" />
        </div>
        <div className='w-75'>
          <h2>COMPANY NAME</h2><hr/>
        </div>
      </div>

      <h4>Internships:</h4>
      <div className='d-flex flex-column align-items-center w-100 border rounded'
        style={{overflowY:'scroll', overflowX:'hidden', maxHeight:'50vh'}}>
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
        <InterviewCard />
      </div>
    </>
  );
};

export default Company;
