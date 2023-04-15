import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import * as _ from 'lodash';



const HomePage = (data, newData) => {
    console.log("data", newData, data)
    //! for file upload get image path :
    const handleUpload = (e) => {
        console.log("new", e.target.files[0]);
    }

    //! for data get from another component -----

    // const queryClient = useQueryClient();
    // const data = queryClient.getQueryData('limbani-softwares');
    // console.log("queryClient123", data);

    const queryClient = useQueryClient();
    const developerData = queryClient.getQueryData('developers');
    console.log("test--", developerData);

    return (
        <div>
            <div style={{ fontSize: '58px', zIndex: '1' }}>
                Wel-Come To Our Site
            </div>
            <div>
                <input type="file" name='sample-file' onChange={(e) => handleUpload(e)} />
            </div>
        </div>
    )
}

export default HomePage;

