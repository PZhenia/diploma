import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";

import styles from "./Hotel.module.css";

const categoryImageMap = {
    City: ["city-1.jpg", "city-2.jpg", "city-3.jpg"],
    Lakefront: ["lake-1.jpg", "lake-2.jpg", "lake-3.jpg"],
    Beachfront: ["beach-1.jpg", "beach-2.jpg", "beach-3.jpg"],
    Castles: ["castles-1.jpg", "castles-2.jpg", "castles-3.jpg"],
    Tropical: ["tropical-1.jpg", "tropical-2.jpg", "tropical-3.jpg"],
};

function getRandomImage(category) {
    const images = categoryImageMap[category] || [];
    if (images.length === 0) return "/assets/hotel-images/default.jpg";
    const randomIndex = Math.floor(Math.random() * images.length);
    return `/assets/hotel-images/${images[randomIndex]}`;
}

export default function HotelCard({
    title = "title",
    city = "city",
    hotelLocation = "address",
    ratingValue = 0,
    category = "City",
    }) {
    const imageUrl = getRandomImage(category);

    return (
        <Card className={styles.hotelCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={`${category} hotel`}
                    className={styles.hotelImg}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body3" sx={{ color: "text.secondary" }}>
                        {city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {hotelLocation}
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={ratingValue} precision={0.5} readOnly />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
