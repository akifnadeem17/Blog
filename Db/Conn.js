import mongoose from "mongoose";
const Connection_Url =
  "mongodb+srv://Akif:Akif12345@cluster0.h32z3.mongodb.net/BlogData?retryWrites=true&w=majority";

const db = mongoose
  .connect(Connection_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.log(error);
  });

export default db;
