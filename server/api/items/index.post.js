import { readData, writeData } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        if (!body || Object.keys(body).length === 0) {
            throw createError({
                statusCode: 400,
                statusMessage: "Request body is required!"
            });
        }

        const data = await readData();

        data.push(body);

        await writeData(data);

        return {
            message: "Data added successfully",
            data
        };

    } catch (error) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || "Something went wrong"
        });
    }
});