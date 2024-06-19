import axios from "axios";

export default function useAxios (){

    const post = async (url: string, param: any) => {
        let config;
        const token = localStorage.getItem('token')

        if(token){
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
            }

        }else {
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'multipart/form-data'
                }
            }
        }

         try {
             return await axios.post(url, param, config)
         }catch (error){
            showError(error)
         }
    }

    const get = async(url: string) => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        }
        
        try {
            return await axios.get(url, config)
        }catch (error){
           showError(error)
        } 
    }

    const patch = async(url: string, params: any) => {
        let config;
        const token = localStorage.getItem('token')

        if(token){
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
            }

        }else {
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'multipart/form-data'
                }
            }
        }

        try {
            return await axios.patch(url, params, config)
        }catch (error){
           showError(error)
        }
    }

    const remove = async(url: string) => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        }

        try {
            return await axios.delete(url, config)
        }catch (error){
           showError(error)
        }
    }

    const showError = (error: any) => {
        const message = error.response.data.message
        if(Array.isArray(message)){
            
        }else{
            
        }
    }

    return {
        post,
        get,
        patch,
        remove
    }
}