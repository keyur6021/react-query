import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as _ from 'lodash';

const HomePage = () => {

    // example of featch the data(simple-method)
    const [data, setData] = useState([]);
    const [loadding, setLoadding] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/limbani-softwares').then((response) => {
            console.log("response", response)
            setData(response);
            setLoadding(false)
        }).catch((error) => {
            setError(error.message)
            setLoadding(false)
        })

    }, [])

    if (loadding) {
        return <div> Loadding component..</div>
    }
    if (error) {
        return <div>{error}.....</div>
    }

    return (
        <React.Fragment>
            {
                _.map(data?.data, (data, index) => {
                    return <div>
                        {data.name}
                    </div>
                })
            }
        </React.Fragment>
    )
}

export default HomePage