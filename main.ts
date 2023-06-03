import app from "./src";
import http from "http"

const server = http.createServer(app)
server.listen(process.env.PORT, () => console.log("http://localhost:" + process.env.PORT))