import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESSTOKEN, REFRESHTOKEN } from "../constant";

function AuthForm({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const authType = method === "login" ? "Login" : "Register";
    const data = method === "login" ? { username, password } : { username, email, password }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(route, data);
            if (method === "login") {
                localStorage.setItem(ACCESSTOKEN, response.data.access);
                localStorage.setItem(REFRESHTOKEN, response.data.refresh);
                navigate("/");
            }
            else {
                navigate("/login");
            }
        } catch (error) {
            console.error(`Error during ${method}:`, error);
        }
    }

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>{authType}</h2>
                {method === "register" && (<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />)}
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">{authType}</button>
                <div className="signup-or-signin">
                    {method === "login" ? (
                        <>
                            <span>Don't have an account?</span>
                            <a onClick={() => navigate("/register")}>Register</a>
                        </>
                    ) : (
                        <>
                            <span>Already have an account?</span>
                            <a onClick={() => navigate("/login")}>Login</a>
                        </>
                    )}
                </div>
            </form>

        </div>
    );
}

export default AuthForm;