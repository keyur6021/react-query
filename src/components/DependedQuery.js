import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';


const featchUserData = (email) => {
    console.log("--->  data123", email)
    return (axios.get(`http://localhost:5000/users/${email}`))
}

const fetchChannelId = (channelId) => {
    return axios.get(`http://localhost:5000/channels/${channelId}`)
}

const DependedQuery = ({ email }) => {

    const { data: userName } = useQuery(['users', email], () => featchUserData(email), {
        // enabled: !!email,
        refetchOnWindowFocus: false,
    })
    const channelId = userName?.data?.userName;

    useQuery(['channelData', channelId], () => fetchChannelId(channelId), {
        enabled: !!channelId
    });
    console.log("--->  channelId", channelId)

    return (
        <React.Fragment>
            DependedQuery
        </React.Fragment>
    )
}

export default DependedQuery;