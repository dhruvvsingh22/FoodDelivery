import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dhruvvsingh22:Dhruv3039@cluster0.zqvxc.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
