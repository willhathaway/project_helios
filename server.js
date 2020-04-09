// SERVER FILE. COMMAND "NODE SERVER.JS" TO START

// dependencies:
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// initialize express app:
const app = express();

// define a port:
const PORT = process.env.PORT || 3001;

// configure body parsing for AJAX requests

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve up static assets:
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// add routes, both API and view:
app.use(routes);

// connect to the Mongo DB:
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/taskDB",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// start the API server:
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);