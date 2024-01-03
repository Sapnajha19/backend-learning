import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()
//app.use( is used to set configurations and middlewares)
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))  //we are acceptioning json
app.use(express.urlencoded({extended: true, limit: "16kb"}))  //to understand url encoded data
app.use(express.static("public"))  //to keep assets in public
app.use(cookieParser())  //to access cookies and set cookies from/to user's browser
export { app }