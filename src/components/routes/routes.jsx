import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./home/home";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import Logout from "../logout/logout";
import NavigationBar from "../navigationBar/navigationBar";


const AppRoutes = () => {

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="sign-up" element={<SignUp />}/>
                    <Route path="logout" element={<Logout/>}/>
                </Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes
