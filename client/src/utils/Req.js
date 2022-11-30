import axios from 'axios';

const apiBase = "http://127.0.0.1:3333"
const Req = {};

/** Server get requests */
Req.get = async (url) => {
    return "HELLO WORLD"
}

/** Server post requests */
Req.post = async (url) => {
    return "HELLO WORLD"
}

/** Server put requests */
Req.put = async (url) => {
    return "HELLO WORLD"
}

/** Server delete requests */
Req.del = async (url) => {
    return "HELLO WORLD"
}

/** Server login requests */
Req.login = async (username, password) => {
    const response = await axios.post(`${apiBase}/user/login`,
        {
            username: username,
            password: password
        }
    );

    if (response.data?.result === true) {
        localStorage.setItem('user', response.data.user.id);
        return true;
    } else {
        return false;
    }
}

/** Export the request functions */
export default Req;