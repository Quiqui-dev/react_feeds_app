import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss"
import { useSelector } from "react-redux";

const NavigationBar = () => {

    const isLoggedOn = useSelector( (state) => state.auth.isLoggedOn)
    

    return (
        <Fragment>
        <div className="navigation-bar">
            <Link className="logo-container" to="/">
                HOME
            </Link>

            {isLoggedOn ?
            <div className="nav-links-container">
                <Link className="nav-link" to="/logout">
                    LOGOUT
                </Link>
            </div>
            :
            <>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/sign-in">
                        SIGN-IN
                    </Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/sign-up">
                        SIGN-UP
                    </Link>
                </div>
            </>
            } 


        </div>
        <Outlet />
        </Fragment>
    );
}
  

export default NavigationBar;