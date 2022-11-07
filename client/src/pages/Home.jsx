/**
 * Route: /
 *
 * The home page will simply lead users to the login
 * page and display introductory information about the application.
 */

const Home = () => {
  return (
    <>
      <div class="container py-5 h-100">
        <div class="d-flex justify-content-center align-items-center">
          <div class="border border-success rounded">
            <div class="row">
              <div class="col-6 border-right border-success" id="login-panel">
                <div class="mx-5 p-5" id="login-pane">
                  <h5
                    class="text-center font-weight-bold pb-3 pt-1 display-4"
                    id="login-title"
                  >
                    InTime User Login
                  </h5>

                  <form id="login-form">
                    <h5>Enter Account Information</h5>

                    <div id="textbox-email" class="mb-2">
                      <input
                        type="text"
                        id="input-email"
                        class="form-control"
                        placeholder="Phone number or email address"
                      />
                      <label class="form-label" for="form2Example11">
                        Username
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        class="form-control"
                      />
                      <label class="form-label" for="form2Example22">
                        Password
                      </label>
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                      <button
                        class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="button"
                      >
                        Log in
                      </button>
                      <a class="text-muted" href="#!">
                        Forgot password?
                      </a>
                    </div>

                    <div class="d-flex align-items-center justify-content-center pb-4">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <button type="button" class="btn btn-outline-danger">
                        Create new
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
