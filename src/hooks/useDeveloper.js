import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const featchSuperHero = () => {
    return axios.get('http://localhost:5000/limbani-softwares')
}

const AddNewData = (newDeveloper) => {
    console.log("newDeveloper", newDeveloper);
    return axios.post('http://localhost:5000/limbani-softwares', newDeveloper);
}

const DeleteDeveloperData = (deleteId) => {
    console.log("deleteId", deleteId);
    return axios.delete(`http://localhost:5000/limbani-softwares/${deleteId}`)
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

//! create a uaeMutation Hook for the connect with the api :

export const useAddDeveloperData = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation(AddNewData, {
        onSuccess: () => {
            //! for dairect validate the data
            queryClient.invalidateQueries('developers');
            navigate('/developers')
        },
    });

}



export const useDeleteData = () => {
    const queryClient = useQueryClient();
    return useMutation(DeleteDeveloperData, {
        onSuccess: () => {
            toast.success('delete user successfully')
            queryClient.refetchQueries('developers');
        }
    });
}