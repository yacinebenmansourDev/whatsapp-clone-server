import app from "./app.js";
import dotenv from "dotenv";

// dotEnv config
dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
