/**
 * Route: /
 *
 * The home page will simply lead users to the login
 * page and display introductory information about the application.
 */

import Logo from '../images/logo.png';
import Trend from '../images/trend.png';

const Home = () => {
  return (
    <>
      <div className='d-flex justify-content-around align-items-center flex-wrap pt-5'>
        <div className='d-flex flex-column align-items-center' style={{maxWidth:'45%'}}>
          <img src={Logo} alt="InTime-Logo" width="100%" />
          <a href='/login'><button className='btn btn-success fs-1 mt-5 mb-5 ps-5 pe-5'>Get Started</button></a>
        </div>

        <div style={{maxWidth:"400px"}}>
          <div className='container rounded shadow p-1 mb-5 text-white bg-success'>
            <h4 className='text-center'>What Is InTime?</h4>
            <p className='text-center fs-5'>
              InTime is a web application dedicated to helping you navigate tech-industry internships!
            </p>
          </div>

          <div className='container rounded shadow p-1 mt-5 text-white' style={{backgroundColor:"#FF4700"}}>
            <h4 className='text-center'>How It Works?</h4>
            <p className='text-center fs-5'>
              We do this by allowing user's to share timeline information related to their recent internship interview experiences.
            </p>
          </div>
        </div>
      </div>

      <img src={Trend} alt="TREND.PNG"
        className="position-absolute left-0 bottom-0"
        style={{ zIndex: '-999', width: '20vw' }} />
    </>
  );
};

export default Home;
