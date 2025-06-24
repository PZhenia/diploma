import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "../ScrollTop/index.jsx";

const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;