import { serverHTTP } from "./app"


const port = 3333

serverHTTP.listen(port, () => {
    console.log(
        `server is running on port: ${port} ✨`
    )
})