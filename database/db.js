const mongoose = require("mongoose");

const MONGO_URL = "mongodb://mongo:oFQcJhOqdBYeOni3d0f3@containers-us-west-142.railway.app:6251";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db
