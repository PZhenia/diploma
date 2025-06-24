import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

export default function HotelDetails() {
    const { id } = useParams();
    const hotel = useSelector(state =>
        state.hotels.hotels.find(hotel => String(hotel.id) === String(id))
    );

    if (!hotel) {
        return <Typography>Hotel not found</Typography>;
    }

    return (
        <div style={{ padding: "2rem" }}>
            <Typography variant="h4">{hotel.name}</Typography>
            <Typography variant="h6" color="text.secondary">{hotel.city}, {hotel.address}</Typography>
            <Typography>Rating: {hotel.rating}</Typography>
            <Typography>Category: {hotel.category}</Typography>
        </div>
    );
}
