import mongoose from "mongoose";

const DBConnection = async () => {
try {
    await mongoose.connect(process.env.DBURL);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
}

}

export default DBConnection;
