import React from 'react'
import axios from 'axios';
import { useQueries } from 'react-query';


const fetchData = (developerId) => {
    console.log("--->  developerId", developerId)
    return axios.get(`http://localhost:5000/limbani-softwares/${developerId}`)
}

export const DynamicParaller = ({ developerId }) => {

    // !for dynnamic id passing the useQueries

    const finalqueryData = useQueries(
        developerId.map(id => {
            return {
                queryKey: ['developer', id],
                queryFn: () => fetchData(id)
            }
        })
    )
    console.log("finalqueryData", finalqueryData)
}
