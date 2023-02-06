import axios from "axios";
import { useQuery, useMutation } from "react-query";

export const featchSuperHero = () => {
    return axios.get('http://localhost:5000/limbani-softwares')
}

const AddNewData = (newDeveloper) => {
    console.log("newDeveloper", newDeveloper);
    return axios.get('http://localhost:5000/limbani-softwares', newDeveloper);
}

export const useDeveloperHook = (onSuccess, onError) => {

    // !useQuery for ony get the Data 

    return useQuery('developers',
        featchSuperHero,
        {
            // cacheTimeout: 50000,
            // staleTime: 0      //! for staleTime for catch the data at display time -
            refetchOnMount: false,
            // refetchOnWindowFocus: false
            refetchIntervalInBackground: true,
            enabled: false,
            onSuccess: onSuccess,
            onError: onError,

            // ! this select use for the any particular data get for use further 

            // select: (data) => {
            //     const developers = data.data.map((data) => data.name);
            //     return developers;
            // }
        }
    );
}

export const useAddDeveloperData = () => {
    return useMutation(AddNewData);
}


