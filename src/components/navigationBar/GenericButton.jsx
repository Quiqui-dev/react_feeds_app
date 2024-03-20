import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import { Link, useLocation } from "react-router-dom"



const NavigationButton = (props) => {

    const {path, text} = props.item
    const hide = props.hide

    const location = useLocation()

    const getHideNavButton = (buttonText, isLoggedOn) => {
    
        switch (buttonText) {
            case "LOGOUT": {
                return !isLoggedOn
            }
            case "REMOVE FEED": {
                return !isLoggedOn
            }
            case "ADD FEED": {
                return !isLoggedOn
            }
            case "HOME": {
                return false
            }
            default: {
                return isLoggedOn
            }
        }
    }
    
    
    return (
        <Box>
            <Button
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to={path}
            selected={location.pathname === path}
            sx={{
                display: getHideNavButton(text, hide) ? "none" : "block"
            }}
            >
                {text}
            </Button>
        </Box>
    )
}

export default NavigationButton