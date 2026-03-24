export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return {
        message: "user registered successfully",
        data: body
    }
})