import { readFile } from "fs/promises";

const ReadFile = async DB => {
    try {
        const data = await readFile(DB, "utf8")
        return JSON.parse(data)
    } catch (error) {
        return {error}
    }
}

export default ReadFile