import axios from "axios";
import {TRIP_API} from "../constants/trip";

export const getTrips = () => {
    return axios.get(TRIP_API)
        .then(res => res.data)
        .catch(error => console.log(error));
};