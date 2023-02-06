import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

const ParallelQuerys = () => {

    const fetchDevelopers = () => {
        return axios.get('http://localhost:5000/limbani-softwares');
    }
    const fetchFriends = () => {
        return axios.get('http://localhost:5000/friends');
    }
    // ! parallel query multi query run

    const { data: developers } = useQuery('developer', fetchDevelopers);
    console.log("--->  developers", developers)
    const { data: friends } = useQuery('friends', fetchFriends);
    console.log("--->  friends", friends)

    return (
        <React.Fragment>
            ParallelQueries
        </React.Fragment>
    )
}

export default ParallelQuerys;