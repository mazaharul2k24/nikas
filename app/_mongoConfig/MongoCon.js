import mongoose from "mongoose";

export const Dbconnect = async () => {
  await mongoose
    .connect(process.env.mongo_url)
    .then((res) => {
      console.log("Db connected");
    })
    .catch(() => {
      console.log("Db not connected");
    });
};
    