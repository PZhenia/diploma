import { NavLink } from "react-router";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import {authRoutes, headerRoutes} from "../../../../helpers/headerRoutes.js";

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
                    {headerRoutes.map(({ label, path }) => (
                        <Item>
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
                        <Item>
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
        </header>
    )
}
