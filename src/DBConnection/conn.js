
const mongoose = require("mongoose")
const DB =  "mongodb+srv://admin:adminadmin_1@cluster0.nemfkgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//Test
mongoose.connect(DB).then(() => {
    console.log("connection is successfully setup..")
}).catch((e)=>{
    console.log(e);
    console.log("connection is not build...");
});