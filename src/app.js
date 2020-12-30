const express = require("express");
const log = express();
const path = require("path");
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