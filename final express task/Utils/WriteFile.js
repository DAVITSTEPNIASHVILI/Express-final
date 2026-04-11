import { writeFile } from "fs/promises";

const WriteFile = async (DB, data) => {
    try {
        await writeFile(DB, JSON.stringify(data))
        return "Data saved successfully"
    } catch (error) {
        return {error}
    }
}

export default WriteFile