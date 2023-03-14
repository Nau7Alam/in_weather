import Axios from "axios";
import { WEATHER_KEY } from "./constant";

const commonApi = async (method, url, data) => {
    const key = WEATHER_KEY;
    const baseUrl = BASE_URL;
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