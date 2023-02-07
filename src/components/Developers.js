import React, { useState } from 'react'
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import * as _ from 'lodash';
import mainProfile from './../assets/images/mainProfile.png';
import Carousel from 'react-elastic-carousel';
import { toast } from 'react-toastify';
import { useDeleteData, useDeveloperHook } from '../hooks/useDeveloper';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill } from 'react-icons/ri'


const Developers = () => {
    const onSuccess = () => {
        toast.success("succcessfully called");
        console.log('%c this data will successfully show here', 'color:yellow');
    }

    const onError = () => {
        toast.error("Failed called");
        console.log('%c this data fail', 'color:red');
    }

    // ! destructuring the react-query data from useQuery() -- for get() methode and create a custom Hook ->

    const { isLoading, data, isError, error, isFetching, refetch } = useDeveloperHook(onSuccess, onError);
    const { mutate: DeleteData } = useDeleteData();

    console.log("--->  homePage2", data);

    if (isLoading || isFetching) {
        return <div>Lodiding.....</div>
    }
    if (isError) {
        return <div> {error.message} </div>
    }

    return (
        <React.Fragment>
            <div>
                <div style={{ color: 'red', fontSize: '25px', fontWeight: 'bold', padding: '15px' }}> Here teh featch limbani softwares developer data</div>
                <div>
                    <Carousel itemsToShow={3.5}>
                        {
                            _.map(data?.data, (data, index) => {
                                return <div className='parent-carousel' key={data.id}>
                                    <div className='image-section'>
                                        <img src={mainProfile} alt='user-profile' className='profile-user' />
                                    </div>
                                    <Link className='single-name' to={`/developers/${data.id}`}>
                                        {data.name}
                                    </Link>
                                    <div className='description'>
                                        {data.position}
                                    </div>
                                    <button onClick={() => DeleteData(data?.id)} className='btn btn-danger rounded-pill'> <RiDeleteBin6Fill /> </button>
                                </div>
                            })
                        }
                    </Carousel>

                    <button
                        className='btn btn-danger w-50 mt-4'
                        onClick={refetch}   //! after clicking the event fetch the data
                    >Featch Developer Data</button>
                </div >
            </div>
        </React.Fragment>
    )
}

export default Developers;