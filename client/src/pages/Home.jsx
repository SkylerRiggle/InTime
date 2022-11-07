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
      <div className='d-flex flex-wrap'>
        <div>
          <img src={Logo} alt="InTime-Logo" width="45%" />
        </div>

        <div style={{maxWidth:"45%"}}>
          <div className='container'>
            <h4>This is a title</h4>
            <p>
              I have no idea what to say here, but I'm gonna type a bunch of junk just so we can see
              what this will look like when we actually populate it with something more meaningful.
            </p>
          </div>

          <div className='container'>
            <h4>This is also a title</h4>
            <p>
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
