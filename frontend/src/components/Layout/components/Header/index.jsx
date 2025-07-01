import { useState } from "react";
import { NavLink } from "react-router";
import { useMediaQuery, IconButton, Drawer, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { authRoutes, headerRoutes } from "../../../../helpers/headerRoutes.js";

import styles from "./Header.module.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#fff",
    boxShadow: "none",
}));

export default function Header() {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    const renderMenuItem = ({ label, path }) => (
        <NavLink key={path} to={path} className={styles.navLink} onClick={toggleDrawer(false)}>
            <div className={styles.mobileMenuItem}>{label}</div>
        </NavLink>
    );

    return (
        <header className={styles.header}>
            {isMobile ? (
                <>
                    <IconButton onClick={toggleDrawer(true)} sx={{ color: "#181818" }}>
                        <MenuIcon />
                    </IconButton>

                    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                        <div style={{ width: "240px", padding: "16px" }}>
                            {headerRoutes.map(renderMenuItem)}

                            <Divider sx={{ margin: "16px 0", backgroundColor: "#ccc" }} />
                            {authRoutes.map(renderMenuItem)}
                        </div>
                    </Drawer>
                </>
            ) : (
                <Grid container spacing={2}>
                    <Grid size={8} className={styles.leftNav}>
                        {headerRoutes.map(({ label, path }) => (
                            <Item key={path}>
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={styles.navLink}
                                >
                                    <span>{label}</span>
                                </NavLink>
                            </Item>
                        ))}
                    </Grid>
                    <Grid size={4} className={styles.rightNav}>
                        {authRoutes.map(({ label, path }) => (
                            <Item key={path}>
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={styles.navLink}
                                >
                                    <span>{label}</span>
                                </NavLink>
                            </Item>
                        ))}
                    </Grid>
                </Grid>
            )}
        </header>
    );
}
