// Dependencies
const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
const htmlRoutes = require('./routes/routesHtml');
const apiRoutes = require('./routes/routesApi');


app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;
// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});