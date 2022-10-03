import { useNavigate } from "react-router-dom"

export default function NavBar(){

    const navigate = useNavigate();

    return(
        <div className="NavBarContainer">
            <ul className="ulNavBar">
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/Items")}>Items</li>
            </ul>
        </div>
    )
}