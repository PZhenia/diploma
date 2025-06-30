import {useDispatch} from "react-redux";
import {logout} from "../../store/slices/authSlice.js";

import NavigateBtn from "../../components/UI/atoms/NavigateBtn/index.jsx";

import styles from "./MyHotels.module.css";

export default function MyHotels() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className={styles.myHotelsWrapper}>
            <h2>
                My Hotels
            </h2>
            <NavigateBtn
                onClick={handleLogout}
                text="Logout"
            />
        </div>
    )
}
