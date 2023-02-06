import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import * as _ from 'lodash';
import mainProfile from './../assets/images/mainProfile.png';
import Carousel from 'react-elastic-carousel';
import { toast } from 'react-toastify';
import { useDeveloperHook } from '../hooks/useDeveloper';
import { Link } from 'react-router-dom';


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
                    <Carousel itemsToShow={3.5} >
                        {
                            _.map(data?.data, (data, index) => {
                                console.log("--->  data", data.image)
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