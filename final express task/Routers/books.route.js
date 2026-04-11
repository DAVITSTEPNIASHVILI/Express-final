import express from "express"
import {addData, deleteBook, editData, getData, getSingleData} from "../Controllers/books.controllers.js"

const booksRouter = express.Router()

booksRouter.route("/")
    .get(getData)
    .post(addData)

booksRouter.route("/:id")
    .get(getSingleData)
    .put(editData)
    .delete(deleteBook)


export default booksRouter