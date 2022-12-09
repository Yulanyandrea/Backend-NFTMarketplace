import mongoose from "mongoose";

async function conectDb(): Promise<void>{
  const uri = process.env.MONGO_DB_URI;
  if(!uri){
    throw new Error('Mongo DB uri is not defined')
  }
  try {
    await mongoose.connect(uri)
    console.log('connected to database')
  } catch (error) {
    console.log(error)

  }
}


export default conectDb;
