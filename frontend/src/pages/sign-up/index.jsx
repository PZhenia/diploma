import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";

import { signUp } from "../../store/thunks/authThunk";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import styles from "../../styles/Auth.module.css";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({ name: "", email: "", password: "" });

    const { loading } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateName = (value) => {
        if (!/^[a-zA-Z]{3,}$/.test(value)) {
            return "Name must be at least 3 Latin letters.";
        }
        return "";
    };

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

        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setErrors({ name: nameError, email: emailError, password: passwordError });

        if (nameError || emailError || passwordError) return;

        const result = await dispatch(signUp({ name, email, password }));
        if (result.meta.requestStatus === "fulfilled") {
            navigate("/sign-in", { replace: true });
        }
    };

    return (
        <Container maxWidth="sm" className={styles.auth}>
            <Box className={styles.heading}>
                <Typography variant="h3" component="h1">Sign Up</Typography>
                <Typography variant="h6" component="h2">Create an account to get started.</Typography>
            </Box>

            <Box component="form" className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setErrors({ ...errors, name: validateName(name) })}
                    error={!!errors.name}
                    helperText={errors.name}
                />
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
                    {loading ? <CircularProgress size={24} /> : "Sign Up"}
                </Button>

                <Typography className={styles.linkText}>
                    Already registered? <Link to="/sign-in">Login</Link>
                </Typography>
            </Box>
        </Container>
    );
}
