import { useDispatch } from "react-redux";
import { logout } from "../../../../store/slices/authSlice.js"

import Button from "@mui/material/Button";

export default function LogoutBtn() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleLogout}
                sx={{
                    backgroundColor: '#f8f8f8',
                    color: '#181818',
                }}
            >
                Logout
            </Button>
        </div>
    )
}
