import { useState} from "react"
import { handleLoginUser } from "../../services/login"
import { useDispatch,} from "react-redux"
import { setAuth } from "../../../redux/actions/authActions"
import { useNavigate } from "react-router-dom"

import Button from "@mui/material/Button"
import { Box, FormControl, TextField } from "@mui/material"

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const user = await handleLoginUser(email, password)
            
            dispatch(setAuth(user))
            resetFormFields()
            navigate("/")
        } catch (err) {
            console.log("Error logging in", err)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }

    return (
        <Box
        component="section"
        justifyContent="center"
        alignItems="center"
        display="flex"
        >
        <form onSubmit={handleSubmit}>
            <h4>Already have an account?</h4>
            <TextField
                required
                label="Email"
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
                fullWidth
                margin="normal"
            />
            <TextField 
                required
                type="password"
                label="Password"
                onChange={handleChange}
                name="password"
                value={password}
                fullWidth
                margin="normal"
            />
            <Box justifyContent="center" alignItems="center" display="flex">
                <Button 
                type="submit"
                variant="outlined"
                color="primary"
                >
                    Login
                </Button>
            </Box>
        </form>
        </Box>
    )
}

export default SignInForm