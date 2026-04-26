import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css"

function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <input type="text" className="search-input" placeholder="Enter your Search Shoes"></input>
            </div>
            <div className="profile-container">
                <a href="#">
                    <FiHeart className="nav-icons"></FiHeart>
                </a>
                <a className="#">
                    <AiOutlineShoppingCart className="nav-icons"></AiOutlineShoppingCart>
                </a>

                <a className="#">
                    <AiOutlineUserAdd className="nav-icons"></AiOutlineUserAdd>
                </a>
            </div>

        </nav>
    );
}

export default Nav;