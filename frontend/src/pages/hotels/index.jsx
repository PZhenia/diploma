import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router";
import Pagination from "@mui/material/Pagination";
import Hotel from "../home/components/Hotel";
import MainPageBtn from "../../components/UI/atoms/MainPageBtn";

import styles from "./Hotels.module.css";

export default function Hotels() {
    const hotels = useSelector(state => state.hotels.hotels || []);
    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category");
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const hotelsPerPage = 10;

    const filteredHotels = selectedCategory
        ? hotels.filter(hotel => hotel.category === selectedCategory)
        : hotels;

    const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);
    const startIndex = (currentPage - 1) * hotelsPerPage;
    const currentHotels = filteredHotels.slice(startIndex, startIndex + hotelsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.hotelsList}>
                {currentHotels.length > 0 ? (
                    currentHotels.map(hotel => (
                        <Hotel
                            key={hotel.id}
                            id={hotel.id}
                            title={hotel.name}
                            city={hotel.city}
                            hotelLocation={hotel.address}
                            ratingValue={hotel.rating}
                            category={hotel.category}
                        />
                    ))
                ) : (
                    <p>No hotels found in this category.</p>
                )}
            </div>

            {totalPages > 1 && (
                <div>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="#f8f8f8"
                        size="large"
                        sx={{
                            marginBottom: "24px"
                        }}
                    />
                </div>
            )}

            <MainPageBtn onClick={() => navigate("/")} />
        </div>
    );
}
