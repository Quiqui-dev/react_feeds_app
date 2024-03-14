import { LOGIN_USER_API } from "../constants/urls/urls"
import axiosInstance from "./axiosInstance"


export const handleLoginUser = async (email, password) => {

    try {
        const loginUser = {
            email_address: email,
            password: password
        }

        const response = await axiosInstance.post(LOGIN_USER_API, loginUser)
        
        console.log(response.data)

        return {
            apiKey: response.data.api_key,
            displayName: response.data.display_name,
            email: response.data.emailAddress,
            isLoggedOn: true
        }


    } catch (err) {
        // Non-2XX response code
        console.log(err)
    }
}