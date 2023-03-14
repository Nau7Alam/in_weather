import { optionsMonth, optionsNoSec } from "./constant";

const timeStampToTime = (timestamp, month = false) => {
    if (timestamp) {
        let option = month ? optionsMonth : optionsNoSec;
        let date = new Date(timestamp * 1000);
        date = new Intl.DateTimeFormat("en-AU", option).format(date);
        return date
    } else {
        return '';
    }
}

export { timeStampToTime };