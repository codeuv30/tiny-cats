import app from "./src/app.ts";
import CONFIG from "./src/config/config.ts";
import connectToDB from "./src/config/db.ts";

const PORT = CONFIG.PORT;

app.listen(PORT, () => {
    connectToDB();
    console.log(`Server is listening on port ${PORT}`);
});