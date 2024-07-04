import axios from 'axios';

axios.defaults.baseURL = '/';

export default class Api {

    // user login
    static addLogin = async (data) => {
        try {
            const res = await axios.post("/api/v1/login", data);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }
}
