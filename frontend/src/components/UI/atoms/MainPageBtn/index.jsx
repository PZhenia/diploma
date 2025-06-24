import Button from "@mui/material/Button";

export default function MainPageBtn({ onClick }) {
    return (
        <div>
            <Button
                variant="contained"
                onClick={onClick}
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
