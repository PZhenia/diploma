import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function CategoryCard() {
    const [selectedCard, setSelectedCard] = useState(null);
    const hotels = useSelector(state => state.hotels.hotels || []);
    const navigate = useNavigate();

    const categories = useMemo(() => {
        const grouped = {};

        hotels.forEach(hotel => {
            if (hotel.category) {
                if (!grouped[hotel.category]) {
                    grouped[hotel.category] = 0;
                }
                grouped[hotel.category]++;
            }
        });

        return Object.entries(grouped).map(([category, count]) => ({
            category,
            count,
        }));
    }, [hotels]);

    const handleClick = (category, index) => {
        setSelectedCard(index);
        navigate(`/hotels?category=${category}`);
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
                gap: 2,
            }}
        >
            {categories.map((card, index) => (
                <Card key={card.category}
                    sx={{
                        backgroundColor: "#f8f8f8"
                    }}
                >
                    <CardActionArea
                        onClick={() => handleClick(card.category, index)}
                        data-active={selectedCard === index ? '' : undefined}
                        sx={{
                            height: "100%",
                            "&[data-active]": {
                                backgroundColor: "action.selected",
                                "&:hover": {
                                    backgroundColor: "action.selectedHover",
                                },
                            },
                        }}
                    >
                        <CardContent sx={{ height: "100%" }}>
                            <img
                                src={`/assets/icons/${card.category}.svg`}
                                alt={`${card.category} Icon`}
                                width={40}
                                height={40}
                            />
                            <Typography variant="h5" component="div">
                                {card.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.count} hotels
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}

export default CategoryCard;
