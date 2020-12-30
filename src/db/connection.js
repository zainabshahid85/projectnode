
const mongoose = require("mongoose");

const URI =
  "mongodb+srv://zainab:style.pk@cluster0.nzaxw.mongodb.net/<project>?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;



