import { Route, Routes} from "react-router-dom";
import Home from "./home/home";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import NavigationBar from "../navigationBar/navigationBar";


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<NavigationBar/>}>
                <Route index element={<Home/>}/>
                <Route path="sign-in" element={<SignIn/>}/>
                <Route path="sign-up" element={<SignUp />}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes
