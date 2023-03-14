const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Kolkata",
};
const optionsNoSec = {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Kolkata",
};
const optionsMonth = {
    day: "numeric",
    month: "short",
};

const mainIcons = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
    Mist: "wi-fog",
    Smoke: "wi-fog",
    Haze: "wi-fog",
    Dust: "wi-fog",
    Fog: "wi-fog",
    Sand: "wi-fog",
    Dust: "wi-fog",
    Ash: "wi-fog",
    Squall: "wi-fog",
    Tornado: "wi-fog",
};

export { days, options, optionsNoSec, optionsMonth, mainIcons }