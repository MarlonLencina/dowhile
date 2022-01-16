import "dotenv/config"
import Express from "express";
import {
    Server
} from "socket.io"
import http from "http"
import { routes } from "./routes";
import cors from "cors"


const app = Express()
app.use(cors())


const serverHTTP = http.createServer(app)
const io = new Server(serverHTTP, {
    cors: {
        origin: "*"
    }
})

io.on("connection", socket => {
    console.log(`usuario conectado no socket ${socket.id}`)
})


app.use(Express.json())

app.use(routes)

export {
    serverHTTP, io
}