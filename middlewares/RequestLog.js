export const RequestLog = (req, res, next) => {
    let date = new Date();
    console.log(`${date.toISOString()} ${req.method} ${req.url}`);
    next();
};
