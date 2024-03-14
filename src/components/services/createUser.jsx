import { CREATE_USER_API } from "../constants/urls/urls"
import axiosInstance from "./axiosInstance"


export const handleCreateUser = async (displayName, email, password) => {

    try {

        const newUser = {
            display_name: displayName,
            email_address: email,
            password: password
        }

        const response = await axiosInstance.post(CREATE_USER_API, newUser)
        
        return {
            apiKey: response.data.api_key,
            displayName: response.data.display_name,
            email: response.data.emailAddress,
            isLoggedOn: true
        }

    } catch (err) {
        // Non-2XX response code
        //console.log(err.response)
        console.log(err)
    }
}