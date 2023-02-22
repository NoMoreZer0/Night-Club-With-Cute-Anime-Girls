import React, {
    useContext,
    useState
} from "react";
import {
    Link,
    useNavigate
} from "react-router-dom";
import "./navbar.css";
import {
    ArrowDropDown,
    Notifications,
    Search
} from "@mui/icons-material";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <span className="title">GummyAnime</span>
                    <Link to="/">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/animes">
                        <span className="navbarmainLinks">Animes</span>
                    </Link>
                    <Link to="/random">
                        <span className="navbarmainLinks">Random</span>
                    </Link>
                </div>
                <div className="right">
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <LogoutIcon onClick={() => {
                        dispatch(logout());
                        navigate("/login");
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
