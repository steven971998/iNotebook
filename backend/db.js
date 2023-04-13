const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

//To connect to MongoDB Atlas:
// const connectToMongo = async ()=>{
// mongoose.connect('mongodb+srv://steven:steven123@cluster0.lhfxqbm.mongodb.net/iNotebook?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(()=>{
//     //  mongoose.connect('mongodb+srv://steven:steven123@cluster0.93jori1.mongodb.net/CRUD?retryWrites=true&w=majority').then(()=>{
//      console.log("MongoDB Atlas Connected successfully.")
//   }).catch(()=>{
//      console.log("Failed to connect.")
//   });
// }

module.exports = connectToMongo;