import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router";

import { signIn } from "../../store/thunks/authThunk";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import styles from "../../styles/Auth.module.css";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({ email: "", password: "" });

    const { loading } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const validateEmail = (value) => {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            return "Invalid email format.";
        }
        return "";
    };

    const validatePassword = (value) => {
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)) {
            return "Password must be at least 6 characters and contain letters and numbers.";
        }
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setErrors({ email: emailError, password: passwordError });

        if (emailError || passwordError) return;

        const result = await dispatch(signIn({ email, password }));
        if (result.meta.requestStatus === "fulfilled") {
            navigate(from, { replace: true });
        }
    };

    return (
        <Container maxWidth="sm" className={styles.auth}>
            <Box className={styles.heading}>
                <Typography variant="h3" component="h1">Login</Typography>
                <Typography variant="h6" component="h2">Welcome back. Let’s continue your journey.</Typography>
            </Box>

            <Box component="form" className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setErrors({ ...errors, email: validateEmail(email) })}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setErrors({ ...errors, password: validatePassword(password) })}
                    error={!!errors.password}
                    helperText={errors.password}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    className={styles.button}
                >
                    {loading ? <CircularProgress size={24} /> : "Login"}
                </Button>

                <Typography className={styles.linkText}>
                    No account? <Link to="/sign-up">Register here</Link>
                </Typography>
            </Box>
        </Container>
    );
}
