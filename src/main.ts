require("dotenv").config();
import watch from "./functions/watch";

console.log(process.env.INFURA_ENDPOINT)
setInterval(watch, 15000);
