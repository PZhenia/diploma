import Button from "@mui/material/Button";

export default function LogoutBtn( {onClick, text} ) {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                backgroundColor: '#f8f8f8',
                color: '#181818',
            }}
        >
            {text}
        </Button>
    )
}
