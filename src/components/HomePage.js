import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import * as _ from 'lodash';



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
            <div style={{ fontSize: '58px', zIndex: '1' }}>
                Wel-Come To Our Site
            </div>
            {/* {_.map(data?.data, (data) => {
                return data.alterEgo
            })} */}
        </div>
    )
}

export function square(number) {
    return number * number
}

export function newdata(test) {
    console.log("test", test(36))
}
newdata(square);



export default HomePage;