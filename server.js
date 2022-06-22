// Dependencies
const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
const apiRoutes = require('./routes/routesApi');
const htmlRoutes = require('./routes/routesHtml');


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const PORT = process.env.PORT || 3001;
// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});