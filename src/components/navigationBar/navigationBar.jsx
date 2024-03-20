import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Fragment} from "react";
import NavigationButton from "./GenericButton";
import { routeList } from "../routes/routeList";
import NavigationMenu from "./NavigationMenu";

const NavigationBar = () => {

    const isLoggedOn = useSelector( (state) => state.auth.isLoggedOn)

    return (
        <Fragment>
        <AppBar position="static">
            <Toolbar>

            <NavigationMenu isLoggedOn={isLoggedOn}/>
            
            {
                routeList.map( (item) => (
                    <NavigationButton key={item.id} item={item} hide={isLoggedOn}/>
                ))
            }


            </Toolbar>
        </AppBar>
        </Fragment>
    );
}
  

export default NavigationBar;