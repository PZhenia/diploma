import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { enGB  } from "date-fns/locale";

export default function BookingDates() {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    return (
        <div style={{ display: "flex", gap: "16px" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
            <DatePicker
                    label="Check in"
                    value={checkIn}
                    onChange={(newValue) => setCheckIn(newValue)}
                />
                <DatePicker
                    label="Check out"
                    value={checkOut}
                    onChange={(newValue) => setCheckOut(newValue)}
                />
            </LocalizationProvider>
        </div>
    );
}