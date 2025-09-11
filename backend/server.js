const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

//rest object
const app = express();

//.env config
dotenv.config();

//Db connection
connectDB();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["https://task-handler-8loo.vercel.app"],
    credentials: true,
  })
);

//routes
console.log("Registering route /api/user");
app.use("/api/user", require("./routes/userRoutes"));

console.log("Registering route /api/todo");
app.use("/api/todo", require("./routes/todoRoutes"));

console.log("Registering route /api/test");
app.use("/api/test", require("./routes/testRouter"));

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(`app running successfully at: http://localhost:${PORT}`);
});
