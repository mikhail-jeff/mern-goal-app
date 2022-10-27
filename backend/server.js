const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/database');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server running on port ${port}...`.brightMagenta.italic);
});
