import { useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
    const isSmallScreen = useMediaQuery("(max-width:454px)");

    return (
        <TextField
            sx={{
                width: isSmallScreen ? "140px" : "300px",
                "& .MuiInputBase-root": {
                    padding: "4px 12px",
                },
            }}
            className={styles.searchBar}
            variant="standard"
            placeholder={isSmallScreen ? "Search..." : "Search by name, city, or address..."}
            value={value}
            onChange={onChange}
            InputProps={{
                disableUnderline: true,
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon className={styles.searchIcon} />
                    </InputAdornment>
                ),
            }}
        />
    );
}
