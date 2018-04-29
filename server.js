const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const articleRoutes = require("./routes/articleApi");
const app = express();
const PORT = process.env.PORT || 3001;

// initialize body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add API routes
app.use("/api/articles", articleRoutes);

// Send every request to the React apps
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// initializes mongoose for deployment or local
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
