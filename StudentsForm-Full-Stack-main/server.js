const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    const PORT = process.env.PORT || 3005;

    app.listen(PORT || 3005, () => {
      console.log(
        `Server is running on port http://localhost:${process.env.PORT || 3005}`
      );
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
