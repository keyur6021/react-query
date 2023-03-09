import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as _ from 'lodash';

const SampleDeveloper = () => {
    const [isLodding, setIsLodding] = useState(true);
    const [data, setData] = useState([]);
    const [Error, settError] = useState(false);


    useEffect((data) => {
        axios.get("http://localhost:5000/limbani-softwares").then((response) => {
            setData(response.data);
            setIsLodding(false);
        }).catch((error) => {
            settError(error.message)
            setIsLodding(false);
        })
    }, [])

    if (isLodding) {
        return <h2> Lodding.... </h2>
    }
    if (Error) {
        return <h2>{Error}</h2>
    }

    return (
        <React.Fragment>
            <div>
                Supper Heroes Page -------
            </div>
            {_.map(data, (hero, index) => {
                return <div className='name' key={hero.id}>
                    {hero.name}
                </div>
            })}
        </React.Fragment>
    )
}

export default SampleDeveloper;