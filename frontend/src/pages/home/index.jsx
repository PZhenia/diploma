import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import useDebounce from "../../hooks/useDebounce.js";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { getHotels } from "../../store/thunks/hotelsThunk";

import SearchBar from "../../components/UI/molecules/SearchBar";
import BookingDates from "../../components/UI/molecules/BookingDates";
import GuestPicker from "../../components/UI/molecules/GuestPicker/index.jsx";
import Hotel from "./components/Hotel";
import CategoryCard from "../../components/UI/molecules/CategoryCard/index.jsx";

import Pagination from "@mui/material/Pagination";

import styles from "./Home.module.css";

const theme = createTheme({
    typography: {
        heroTitle: {
            fontSize: "82px",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "0.5px",
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    heroTitle: "h1",
                },
            },
        },
    },
});

export default function Home() {
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");
    const debouncedQuery = useDebounce(searchQuery);

    const [randomBg, setRandomBg] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const hotelsPerPage = 10;

    const hotels = useSelector(state => state.hotels.hotels || []);
    const loading = useSelector(state => state.hotels.loading);

    const isSmallScreen = useMediaQuery("(max-width:454px)");

    useEffect(() => {
        dispatch(getHotels());

        const randomNum = Math.floor(Math.random() * 3) + 1;
        setRandomBg(`url("/assets/backgrounds/background-${randomNum}.jpg")`);
    }, [dispatch]);

    const filteredHotels = useMemo(() => {
        if (!debouncedQuery) return hotels;

        const q = debouncedQuery.toLowerCase();
        return hotels.filter(hotel =>
            hotel.name.toLowerCase().includes(q) ||
            hotel.city.toLowerCase().includes(q) ||
            hotel.address.toLowerCase().includes(q)
        );
    }, [debouncedQuery, hotels]);

    const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);
    const startIndex = (currentPage - 1) * hotelsPerPage;
    const currentHotels = filteredHotels.slice(startIndex, startIndex + hotelsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.homeWrapper} style={{ backgroundImage: randomBg }}>
                <div className={styles.content}>
                    <Typography
                        variant="heroTitle"
                        gutterBottom
                        sx={{
                            fontSize: {
                                xs: "64px",
                                lg: "82px",
                            },
                        }}
                    >
                        Explore your place to stay
                    </Typography>
                </div>
                <div className={styles.bookingPanel}>
                    <SearchBar
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <BookingDates />
                    <GuestPicker />
                </div>
            </div>

            <div className={styles.categoryList}>
                <CategoryCard />
            </div>

            <div className={styles.hotelsList}>
                {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
                        <CircularProgress size={40} />
                    </div>
                ) : currentHotels.length > 0 ? (
                    currentHotels.map(hotel => (
                        <Hotel
                            key={hotel.id}
                            id={hotel.id}
                            title={hotel.name}
                            city={hotel.city}
                            hotelLocation={hotel.address}
                            ratingValue={hotel.hotel_rating}
                            category={hotel.category}
                        />
                    ))
                ) : (
                    <div style={{ margin: "auto" }}>
                        There are no hotels for this search query
                    </div>
                )}
            </div>


            <div className={styles.paginationWrapper}>
                {totalPages > 1 && (
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="#f8f8f8"
                        size={isSmallScreen ? "small" : "medium"}
                        siblingCount={isSmallScreen ? 0 : 1}
                        boundaryCount={isSmallScreen ? 1 : 2}
                    />
                )}
            </div>
        </ThemeProvider>
    );
}
