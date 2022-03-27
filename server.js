// Dependencies
const express = require('express');

// Set Port
const PORT = process.env.PORT || 3001;

// Create express server
const app = express();

// Point server to routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log (`API server now on port ${PORT}!`);
});