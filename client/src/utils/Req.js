import axios from 'axios';

const apiBase = "http://127.0.0.1:3333"
var currentUser = {};

/** Server get requests */
const get = async (url) => {
    return "HELLO WORLD"
}

/** Server post requests */
const post = async (url) => {
    return "HELLO WORLD"
}

/** Server put requests */
const put = async (url) => {
    return "HELLO WORLD"
}

/** Server delete requests */
const del = async (url) => {
    return "HELLO WORLD"
}

/** Server login requests */
const login = async (username, password) => {
    const response = await axios.post(`${apiBase}/user/login`,
        {
            username: username,
            password: password
        }
    );

    if (response.data?.result === true) {
        currentUser = response.data?.user;
        return true;
    } else {
        return false;
    }
}

/** Export the request functions */
const Req = { get, post, put, del, login, currentUser };
export default Req;