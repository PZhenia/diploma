import LogoutBtn from "../../components/UI/atoms/LogoutBtn/index.jsx";

import styles from "./MyHotels.module.css";

export default function MyHotels() {
    return (
        <div className={styles.myHotelsWrapper}>
            <h2>
                My Hotels
            </h2>
            <LogoutBtn/>
        </div>
    )
}
