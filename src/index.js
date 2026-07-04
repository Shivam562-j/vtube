import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000;

        const server = app.listen(PORT, () => {
            console.log(`⚙️ Server is running on port ${PORT}`);
        });

        server.on("error", (error) => {
            console.error("Server Error:", error);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err);
    })