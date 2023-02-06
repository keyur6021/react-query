import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import * as _ from 'lodash'

const HomePage = () => {

    //! for data get from another component -----

    // const queryClient = useQueryClient();
    // const data = queryClient.getQueryData('limbani-softwares');
    // console.log("queryClient123", data);

    const queryClient = useQueryClient();
    const developerData = queryClient.getQueryData('developers');
    console.log("test--", developerData);

    return (
        <div>
            {/* {_.map(data?.data, (data) => {
                return data.alterEgo
            })} */}
        </div>
    )
}

export default HomePage