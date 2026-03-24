export default defineEventHandler((e) => {
    const query = getQuery(e)

    return {
        message: "Query received",
        query
    }
})