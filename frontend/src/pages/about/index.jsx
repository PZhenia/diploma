import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import styles from "./About.module.css";

export default function About() {
    return (
        <Container maxWidth="md" className={styles.about}>
            <Box className={styles.heading}>
                <Typography variant="h3" component="h1">
                    About Us
                </Typography>
                <Typography variant="h6" component="h2">
                    Your trusted companion in booking the perfect stay.
                </Typography>
            </Box>

            <Box className={styles.paragraph}>
                <Typography>
                    We believe that <span className={styles.highlight}>travel should be simple, inspiring, and enjoyable</span>.
                    Our platform connects you with a curated selection of hotels in stunning locations — whether you're
                    dreaming of a beachfront getaway, a cozy stay by the lake, or a vibrant city escape.
                </Typography>

                <Typography>
                    We partner with a wide network of trusted hotels to ensure you always get competitive pricing,
                    real guest reviews, and the best possible experience — from <span className={styles.highlight}>booking to check-in</span>.
                </Typography>

                <Typography className={styles.quote}>
                    "We don’t just help you book a stay. We help you start a story."
                </Typography>

                <Typography>
                    What makes us different?
                    <ul>
                        <li>Carefully selected accommodations</li>
                        <li>Fast and easy search and booking experience</li>
                        <li>Real reviews from real guests</li>
                        <li>Mobile-friendly and intuitive design</li>
                    </ul>
                </Typography>

                <Typography>
                    We are constantly improving our platform to bring you even more choices and better features.
                    <span className={styles.highlight}> Thank you for choosing us — your journey starts here.</span>
                </Typography>
            </Box>
        </Container>
    );
}
