const express = require("express");
const app = express();
const router = require("./routes/router");
app.use("/", router);

// build the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Express listening on port ${PORT}`);
});


