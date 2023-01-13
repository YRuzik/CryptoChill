import MainService from "../../services/MainService";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {coinsFetching} from "../../actions";


const Header = () => {

    return (
        <div>
            <h1>CryptoChill</h1>
        </div>
    )
}

export default Header;
