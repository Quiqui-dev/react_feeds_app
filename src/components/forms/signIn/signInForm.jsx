import { useState } from "react"
import Button from "../../button/button"
import FormInput from "../../form_input/formInput"
import { handleLoginUser } from "../../services/login"

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await handleLoginUser(email, password)
            resetFormFields()
        } catch (err) {
            console.log("Error logging in", err)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
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
                <Button type="submit">Login</Button>
            </form>

        </div>
    )
}

export default SignInForm