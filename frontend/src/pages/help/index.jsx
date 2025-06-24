import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

import styles from "./Help.module.css";

export default function Help() {
    return (
        <Container maxWidth="md" className={styles.help}>
            <Box className={styles.heading}>
                <Typography variant="h3" component="h1">
                    Help & Support
                </Typography>
                <Typography variant="h6" component="h2">
                    We're here to help you get the most out of your travel.
                </Typography>
            </Box>

            <Box className={styles.accordions}>
                <Accordion className={styles.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.question}>How do I search for a hotel?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Use the search bar on the homepage to enter your destination, travel dates, and number of guests.
                            You can also filter results by category, location, and rating.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={styles.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.question}>How can I filter hotels by category?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            On the homepage, scroll down to the “Categories” section and click on the type of hotel you're interested in
                            (e.g. Beachfront, City, Tropical).
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={styles.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.question}>Can I make a booking directly from this site?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            At the moment, we are focusing on helping you discover and compare hotels. Bookings are redirected to our trusted partners.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={styles.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.question}>I can't find a hotel I previously saw. What happened?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Hotel availability changes often. It’s possible the hotel is fully booked for your selected dates
                            or temporarily unavailable.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={styles.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.question}>Still need help?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Contact us at <strong>support@gmail.com</strong>. We're happy to assist you!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}
