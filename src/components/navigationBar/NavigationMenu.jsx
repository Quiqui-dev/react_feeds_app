import Box from "@mui/material/Box"
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem";

import { userRouteList } from "../routes/routeList";
import NavigationButton from "./GenericButton";

const NavigationMenu = (props) => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const isLoggedOn = props.isLoggedOn
    
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };


    return (
    <Box
    sx={{
        display: !isLoggedOn ? "none": "block"
    }}>
        <IconButton
        color="inherit"
        size="large"
        edge="start"
        aria-label="open drawer"
        onClick={handleOpenNavMenu}
        >
            <MenuIcon/> 
        </IconButton>

        <Menu
        id="nav-menu"
        open={Boolean(anchorElNav)}
        anchorEl={anchorElNav}
        onClose={handleCloseNavMenu}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            {
                userRouteList.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                        <NavigationButton item={page} hide={isLoggedOn}/>
                    </MenuItem>
                ))
            }
        </Menu>

    </Box>   
    )
}

export default NavigationMenu