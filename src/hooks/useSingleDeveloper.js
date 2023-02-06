import axios from "axios"
import { useQuery } from "react-query"


const singleDataget = (developerId) => {
    return axios.get(`http://localhost:5000/limbani-softwares/${developerId}`)
}

export const useSingleDeveloper = (developerId) => {
    return useQuery(['developer', developerId], () => singleDataget(developerId), { initialData: { data: [] } });
}
