export const ApiTransformer = (response, data, statusCode = 200) => {
    return response.status(statusCode).send({
        status: statusCode,
        data: data,
    });
};
