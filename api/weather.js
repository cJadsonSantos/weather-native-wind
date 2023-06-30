import {apiKey} from "../constants";
import axios from "axios";

const forecastEndPoint = params => `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`
const locationsEndPoint = params => `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`

const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint
    }
    try {
        const response = await axios.request(options);
        return response.data
    } catch (err) {
        console.log('error: ', err)
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(forecastEndPoint(params))
}
export const fetchLocations = params => {
    return apiCall(locationsEndPoint(params))
}
