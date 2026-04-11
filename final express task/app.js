import express from "express"
import dotenv from "dotenv"
import booksRouter from "./Routers/books.route.js"

const app = express()

dotenv.config()

app.use(express.json())

app.use("/books", booksRouter)

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))