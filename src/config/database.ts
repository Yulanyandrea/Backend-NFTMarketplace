import mongoose from "mongoose";

async function conectDb(){
  const uri= process.env.MONGO_DB_URI;
  try {
    await mongoose.connect(uri)
    console.log('connected to database')
  } catch (error) {
    console.log(error)

  }
}


export default conectDb;
