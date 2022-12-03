import axios from "axios";

const apiBase = "http://127.0.0.1:3333";
const Req = {};

/** Server get requests */
Req.get = async (url) => {
  const response = await axios.get(apiBase + url);
  return response.data;
};

Req.getInterviewDataPoints = async (url) => {
  const response = await axios.get(apiBase + url);
  return response.data;
};

/** Server post requests */
Req.post = async (url, data) => {
  const response = await axios.post(apiBase + url, data);
  return response.data;
};

/** Server put requests */
Req.put = async (url, data) => {
  const response = await axios.put(apiBase + url, data);
  return response.data;
};

/** Server delete requests */
Req.del = async (url) => {
  const response = await axios.delete(apiBase + url);
  return response.data;
};

/** Server login requests */
Req.login = async (username, password) => {
  const response = await axios.post(`${apiBase}/user/login`, {
    username: username,
    password: password,
  });

  if (response.data?.result === true) {
    localStorage.setItem("user", response.data.user.id);
    return true;
  } else {
    return false;
  }
};

/** Export the request functions */
export default Req;
