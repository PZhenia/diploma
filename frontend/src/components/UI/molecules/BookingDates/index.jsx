import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { enGB } from "date-fns/locale";
import { Box } from "@mui/material";

export default function BookingDates() {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                maxWidth: 600,
                "& .MuiTextField-root": {
                    minWidth: 150,
                    maxWidth: 300,
                    flexGrow: 0,
                    flexShrink: 0,
                },
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
                <DatePicker
                    label="Check in"
                    value={checkIn}
                    onChange={(newValue) => setCheckIn(newValue)}
                    renderInput={(params) => <Box component="div" sx={{ flex: 1 }}>{params.input}</Box>}
                />
                <DatePicker
                    label="Check out"
                    value={checkOut}
                    onChange={(newValue) => setCheckOut(newValue)}
                    renderInput={(params) => <Box component="div" sx={{ flex: 1 }}>{params.input}</Box>}
                />
            </LocalizationProvider>
        </Box>

    );
}
