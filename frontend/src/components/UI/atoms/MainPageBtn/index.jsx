import {useNavigate} from "react-router";

import Button from "@mui/material/Button";

export default function MainPageBtn() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                    backgroundColor: '#f8f8f8',
                    color: '#181818',
                }}
            >
                Go on Main Page
            </Button>
        </div>
    )
}
