// Dependencies
/*************************/
// import dotenv
require("dotenv").config();

const express = require("express");
const cors= require("cors");
const mongoose = require("mongoose");
const client = require("./config/database");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to Database
// Connect the client to the server
client();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Apply Cors middleware to allow requests from all origins
app.use(cors({origin: 'https://reading-list-frontend.onrender.com/'}))

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Add routes, both API and view
app.use(routes);


// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
