import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <button onClick={handleClick} className="logout-btn">
            LogOut
        </button>
    )
}

export default Logout;