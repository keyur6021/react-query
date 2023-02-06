import React from 'react'
import { useParams } from 'react-router-dom';
import { useSingleDeveloper } from '../hooks/useSingleDeveloper';
import * as _ from 'lodash';
import { FaRegUserCircle } from 'react-icons/fa'

const SingleDeveloper = () => {

    const { developerId } = useParams();
    console.log("--->  developerId", developerId)

    const { data, isLodding, isError, error } = useSingleDeveloper(developerId);
    console.log("--->  data123", data);

    if (isLodding) {
        return <div> Lodding....... </div>
    }
    if (isError) {
        return <div> {error.message}....... </div>
    }

    return (
        <React.Fragment>
            <div className='parent-card'>
                <div className='card'>
                    <div>
                        <FaRegUserCircle />
                    </div>
                    <div style={{ paddingLeft: '10px' }}>
                        {
                            data?.data?.name
                        }
                    </div>

                </div>
            </div>


        </React.Fragment>
    )
}

export default SingleDeveloper;