const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');
const searchRoutes = require('./routes/search');
const hotelRoutes = require('./routes/hotels');
const destinationsRoutes = require('./routes/destinations');
const registerRoutes = require('./routes/sign-up');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/search', searchRoutes);
app.use('/hotels', hotelRoutes);
app.use('/destinations', destinationsRoutes);
app.use('/sign-up', registerRoutes);

module.exports = app;
