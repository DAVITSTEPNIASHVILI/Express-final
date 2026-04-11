import WriteFile from "../Utils/WriteFile.js";
import ReadFile from "../Utils/ReadFile.js";

export const getData = async (req, res) => {
    const data = await ReadFile(process.env.DB)
    res.status(200).json(data)
}

export const getSingleData = async (req, res) => {
    const data = await ReadFile(process.env.DB)

    const id = Number(req.params.id)
    
    const foundBook = data.filter(obj => obj.id === id)

    if (foundBook.length === 0) {
        return res.status(404).send("Book with that id doesn't exists")
    }

    return res.status(200).json(foundBook[0])
}

export const addData = async (req, res) => {
    const data = await ReadFile(process.env.DB)

    const body = req.body

    if (!body.title || !body.author || !body.genre || !body.year) {
        return res.status(406).send("There aren't enough dependencies to add book!")
    }

    if (data.map(obj => obj.title === body.title && obj.author === body.author && obj.genre === body.genre && obj.year === body.year).some(el => el)) {
        return res.status(409).send("This book is already exists!")
    }

    body.id = data.length + 1
    data.push(body)
    await WriteFile(process.env.DB, data)

    res.status(200).json(data)
}

export const editData = async (req, res) => {
    const data = await ReadFile(process.env.DB)

    const id = Number(req.params.id)

    const body = req.body

    const foundBook = data.filter(obj => obj.id === id)

    if (foundBook.length === 0) {
        return res.status(404).send("Book with that id doesn't exists")
    }

    if (Object.keys(body).length === 0) {
        return res.status(400).send("No info to edit book")
    }

    if (foundBook[0].title === body.title && foundBook[0].author === body.author && foundBook[0].genre === body.genre && foundBook[0].year === body.year) {
        return res.status(400).send("This book already exists")
    }

    if (body.title) foundBook[0].title = body.title
    if (body.author) foundBook[0].author = body.author
    if (body.genre) foundBook[0].genre = body.genre
    if (body.year) foundBook[0].year = body.year

    await WriteFile(process.env.DB, data)
    res.status(200).json(data)
}

export const deleteBook = async (req, res) => {
    let data = await ReadFile(process.env.DB)

    const id = Number(req.params.id)

    if (data.find(obj => obj.id === id).length === 0) {
        return res.status(404).send("Book not found")
    }

    data = data.filter(obj => obj.id !== id)

    await WriteFile(process.env.DB, data)
    return res.status(200).json(data)
}