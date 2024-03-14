import { useState } from "react"
import Button from "../../button/button"
import FormInput from "../../form_input/formInput"
import { handleCreateUser } from "../../services/createUser"
import { useDispatch} from "react-redux"
import { setAuth } from "../../../redux/actions/authActions"


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
        <div>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>

        </div>
    )
}

export default SignUpForm