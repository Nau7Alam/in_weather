import Axios from "axios";

const commonApi = async (method, url, data) => {
    const key = process.env.REACT_APP_WEATHER_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    return Axios({
        method: method,
        url: baseUrl + url + '&appid=' + key,
        data: data,
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json",
        }
    })
}
export default commonApi;