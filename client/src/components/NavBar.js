// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css'

function NavBar() {

    return (
        <div className="nav-bar">
            <div>
                <Link to="/browse" className="login">
                    Browse
                </Link>
            </div>
            <div>
                {/* Will have conditional logic here based on login status */}
                <Link to="/profile" className="profile">
                    Profile
                </Link>
            </div>
        </div>
    );
}

export default NavBar;