import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../redux/actions/authActions";

const Logout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    dispatch(setLogout())
    navigate("/")
}

export default Logout