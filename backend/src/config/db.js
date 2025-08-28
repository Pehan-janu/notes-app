import mongoose from 'mongoose';

export const connectDB = async () => {

  try{
    //now this is secret environment , anyone cant find URI from here so we have to use dotenv package to hide this
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MONGODB CONNECTED SUCCESSFULLY");
  }catch(error) {
    console.error("Error Connecting to MONGODB",error);
    process.exit(1); //exit with failure
  }
}