import { useState } from "react"
import { handleCreateUser } from "../../services/createUser"
import { useDispatch} from "react-redux"
import { setAuth } from "../../../redux/actions/authActions"

import {Box, Button, FormControl}  from "@mui/material"
import {TextField} from "@mui/material"
import { Fragment } from "react"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const dispatch = useDispatch()

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        try {
            const user = await handleCreateUser(
                displayName, email, password
            )

            dispatch(setAuth(user))
            resetFormFields()
        } catch (error) {
            console.log("Error", error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }

    return (
    <Box justifyContent="center" alignItems="center" display="flex">
        <form onSubmit={handleSubmit}>
            <h4>Don't have an account?</h4>
            <TextField
                label="Display Name"
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
                fullWidth
                sx={{mb:2}}
            />
            <TextField
                label="Email"
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
                fullWidth
                sx={{mb:2}}
            />
            <TextField
                label="Password"
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password}
                fullWidth
                sx={{mb:2}}
            />
            <TextField
                label="Confirm Password"
                type="password"
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                fullWidth
                sx={{mb:2}}
            />
            <Box justifyContent="center" alignItems="center" display="flex">
                <Button 
                type="submit"
                variant="outlined"
                color="primary"
                sx={{mb:2}}
                >
                    Sign Up
                </Button>
            </Box>
        </form>
    </Box>
    )
}

export default SignUpForm