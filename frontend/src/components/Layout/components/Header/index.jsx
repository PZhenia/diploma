import { NavLink } from "react-router";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import styles from "./Header.module.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#fff",
    boxShadow: "none",
    ...theme.applyStyles("dark", {
        backgroundColor: "transparent",
    }),
}));

export default function Header() {
    return (
        <header className={styles.header}>
            <Grid container spacing={2}>
                <Grid size={8} className={styles.leftNav}>
                    <Item><NavLink to="/" className={styles.navLink}>Home</NavLink></Item>
                    <Item><NavLink to="/about" className={styles.navLink}>About</NavLink></Item>
                    <Item><NavLink to="/help" className={styles.navLink}>Help</NavLink></Item>
                </Grid>
                <Grid size={4} className={styles.rightNav}>
                    <Item><NavLink to="/sign-in" className={styles.navLink}>Sign In</NavLink></Item>
                    <Item><NavLink to="/sign-up" className={styles.navLink}>Sign Up</NavLink></Item>
                </Grid>
            </Grid>
        </header>
    )
}
