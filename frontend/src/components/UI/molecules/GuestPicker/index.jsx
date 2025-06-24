import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./GuestPicker.module.css";

const numberOfGuests = [1, 2, 3, 4, 5];

export default function GuestPicker() {
    return (
        <div>
            <Autocomplete
                disablePortal
                options={numberOfGuests}
                sx={{ width: 100 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        placeholder="Guests"
                        className={styles.guestsPicker}
                        InputProps={{
                            ...params.InputProps,
                            disableUnderline: true,
                        }}
                        sx={{
                            "& .MuiInputBase-root": {
                                padding: "4px 12px",
                                backgroundColor: '#f8f8f8',
                            }
                        }}
                    />
                )}
            />
        </div>
    );
}
