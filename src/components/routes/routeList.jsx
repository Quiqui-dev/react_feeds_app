import Home from "@mui/icons-material/Home"
import Login from "@mui/icons-material/Login"
import Logout from "@mui/icons-material/Logout"
import SignUp from "@mui/icons-material/Add"


export const routeList = [
    {id: 0, path: "/", text: "HOME", icon: <Home/>},
    {id: 1, path: "/sign-in", text: "SIGN IN", icon: <Login/>},
    {id: 2, path: "/sign-up", text: "SIGN UP", icon: <SignUp/>},
    {id: 3, path: "/logout", text: "LOGOUT", icon: <Logout/>},
    {id: 4, path: "/popular-feeds", text: "POPULAR FEEDS"}
]

export const userRouteList = [
    {id: 0, path: "/add-feed", text: "ADD FEED"},
    {id: 1, path: "/remove-feed", text: "REMOVE FEED"},
    {id: 2, path: "/followed-feeds", text: "FOLLOWED FEEDS"}
]