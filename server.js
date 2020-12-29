const express = require("express");
const path = require("path");

const app = express();

// Middleware for pathing
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// Default forwarding
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
})

app.listen(process.env.PORT || 8080, () => console.log("Server running, nice..."));
