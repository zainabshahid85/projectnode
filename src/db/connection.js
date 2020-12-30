const mongoose = require("mongoose");

mongoose.connect( "mongodb+srv://zainab:style.pk@cluster0.nzaxw.mongodb.net/<project>?retryWrites=true&w=majority",{

  useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => {
  console.log("Connection Established");
}).catch((e) => {
    console.log("no connection");
})
  



