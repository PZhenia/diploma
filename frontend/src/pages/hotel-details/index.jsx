import { useNavigate } from "react-router";
import { useLoaderData } from "react-router";
import { Typography, Rating, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import NavigateBtn from "../../components/UI/atoms/NavigateBtn/index.jsx";
import styles from "./HotelDetails.module.css";

function getCategoryImages(category) {
    const map = {
        City: ["city-1.jpg", "city-2.jpg", "city-3.jpg"],
        Lakefront: ["lake-1.jpg", "lake-2.jpg", "lake-3.jpg"],
        Beachfront: ["beach-1.jpg", "beach-2.jpg", "beach-3.jpg"],
        Castles: ["castles-1.jpg", "castles-2.jpg", "castles-3.jpg"],
        Tropical: ["tropical-1.jpg", "tropical-2.jpg", "tropical-3.jpg"],
    };
    return (map[category] || []).map(img => `/assets/hotel-images/${img}`);
}

export default function HotelDetails() {
    const navigate = useNavigate();
    const hotel = useLoaderData();

    if (!hotel || typeof hotel !== "object" || hotel.error) {
        return <Typography>Hotel not found</Typography>;
    }

    const {
        name,
        hotel_rating,
        category,
        city,
        address,
        phone_number,
        website
    } = hotel;

    const images = getCategoryImages(category);

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className={styles.hotelContainer}>
            <div className={styles.carouselContainer}>
                <Carousel
                    animation="fade"
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                    autoPlay={false}
                >
                    {images.map((src, index) => (
                        <Paper key={src} elevation={3} className={styles.hotelImg}>
                            <img
                                src={src}
                                alt={`hotel-${index}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        </Paper>
                    ))}
                </Carousel>
            </div>

            <Typography variant="h4" mt={4}>{name}</Typography>

            {hotel_rating !== null && (
                <Rating value={hotel_rating} precision={0.5} readOnly />
            )}

            <Typography variant="body1" color="text.secondary" mt={2}>
                {city}, {address}
            </Typography>

            {phone_number && (
                <Typography mt={1}><strong>Phone:</strong> {phone_number}</Typography>
            )}

            {website && (
                <Typography mt={1}>
                    <strong>Website:</strong>{" "}
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        {website}
                    </a>
                </Typography>
            )}

            <div className={styles.mainBtn}>
                <NavigateBtn
                    onClick={handleClick}
                    text="Go on Main Page"
                />
            </div>
        </div>
    );
}
