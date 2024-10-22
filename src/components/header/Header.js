import { FaArrowDown19 } from "react-icons/fa6";
import "./Header.css"
import { MdArrowDropDown } from 'react-icons/md';


function Header() {
    return(
        <div className="header-container">
            <div className="header-elements">
                <img className="user-place-holder-image" src="/images/user-place-holder.png" alt="place-holder" />
                <div className="user-name">Michael Dioguardi</div>
                <MdArrowDropDown className="arrow-drop-down" />
            </div>
        </div>
    );
}

export default Header;