const express = require("express");
const log = express();
const path = require("path");
var mongoose = require("mongoose");
require("./db/connection");

const port = process.env.PORT || 4000;


const static_path = path.join(__dirname,"../public");
log.use(express.static(static_path));

log.get("/", (req, res) =>{
    res.send("html");

});
log.listen(port, ()=>{
    console.log('server is running at port no ${port}');
}
) 
mongoose
  .connect("mongodb://localhost/onlinestore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));



const db =
  " mongodb+srv://zainab:style.pk@cluster0.nzaxw.mongodb.net/<project>?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 0,
  })
  .then(() => {
    // winston.info(`Connected to ${db}...`);
    console.clear();
    console.log(`Connected to db...`);
    // testCalculation();
    // require("./models/addDummyData")();
  });


 module.exports = log;
