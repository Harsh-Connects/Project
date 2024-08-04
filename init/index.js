const mongoose=require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
    .then(()=>{
        console.log("connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB= async() => {
    await Listing.deleteMany({});
    initData.data =initData.data.map((obj)=>({...obj, owner: "66a5b6c7c2b18ca843042df1" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDB();