import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <SideBar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;