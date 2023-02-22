import { useState } from "react";
import "./register.scss";
import Api from "../../api";
import {
    Link,
    useNavigate
} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleUsername = event => {
        setUsername(event.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Api.post("auth/register", { email, username, password });
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="register">
            <div className="container">
                <h1>Infinite anime TV series and much more.</h1>
                <h2>Watch anywhere. Enjoy anytime.</h2>
                <p>
                    Ready to watch? Fill information related to you and register.
                </p>
                <form onSubmit={handleSubmit} className="register-form">
                    <input
                        value={email}
                        onChange={handleEmail}
                        type={"email"}
                        placeholder="Enter email"
                    />
                    <input
                        value={username}
                        onChange={handleUsername}
                        type={"username"}
                        placeholder="Enter username"
                    />
                    <input
                        value={password}
                        onChange={handlePassword}
                        type={"password"}
                        placeholder="Enter password"
                    />
                    <input type="submit"  value={"Dive into anime world!"}/>
                </form>
                <p>You have an account? Please, <Link to={`/login`}>
                    Sign In
                </Link></p>
            </div>
        </div>
    );
};

export default Register;
