const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB =
  "mongodb+srv://WlugAdmin:admin123@cluster0.dc3xy30.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(
    "mongodb+srv://Ayush:Ayush16@cluster0.bszrfxc.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
