const express = require("express");
const userRoutes = require("./routes/user"); // Assuming routes.js is in the user directory
const courseRoutes = require("./routes/course");

const app = express();

app.use("/user", userRoutes);
app.use("/course", courseRoutes);

app.listen(3000);