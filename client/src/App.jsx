import React, { useContext } from "react";
import {
    Navigate,
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import "./app.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import "./app.scss";
import { AuthContext } from "./authContext/AuthContext";
import Random from "./pages/random/Random";

const App = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const locationPath = location.pathname;
    const appClassname = locationPath === "/login" || locationPath === "/register" ? "app" : "app app--padding";
    return (
        <div className={appClassname}>

            <Routes>
                <Route
                    path="/"
                    element={user ? <Home /> : <Navigate to="/register" />}
                />


                <Route
                    path="/register"
                    element={!user ? <Register /> : <Navigate to="/" />}
                />
                <Route
                    path="/login"
                    element={!user ? <Login /> : <Navigate to="/" />}
                />


                {user && <>
                    <Route
                        path="/animes"
                        element={<Home type="animes" />}
                    />
                    <Route
                        path="/watch/:animeId"
                        element={<Watch />}
                    />
                    <Route
                        path="/random/"
                        element={<Random />}
                    />
                </>
                }
            </Routes>
        </div>
    );
};

export default App;