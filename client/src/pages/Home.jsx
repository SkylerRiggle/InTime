/**
 * Route: /
 *
 * The home page will simply lead users to the login
 * page and display introductory information about the application.
 */

import Logo from '../images/logo.png';

const Home = () => {
  return (
    <>
      <div className='d-flex justify-content-around align-items-center flex-wrap pt-5'>
        <div className='d-flex flex-column align-items-center' style={{maxWidth:'45%'}}>
          <img src={Logo} alt="InTime-Logo" width="100%" />
          <a href='/login'><button className='btn btn-success fs-3 m-5'>Get Started</button></a>
        </div>

        <div style={{maxWidth:"400px"}}>
          <div className='container rounded' style={{backgroundColor:"#B3DB7F"}}>
            <h4 className='text-center'>This is a title</h4>
            <p className='text-center'>
              I have no idea what to say here, but I'm gonna type a bunch of junk just so we can see
              what this will look like when we actually populate it with something more meaningful.
            </p>
          </div>

          <div className='container rounded' style={{backgroundColor:"#FFBD7F"}}>
            <h4 className='text-center'>This is also a title</h4>
            <p className='text-center'>
              I have no idea what to say here, but I'm gonna type a bunch of junk just so we can see
              what this will look like when we actually populate it with something more meaningful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
