import { Exception } from '../exceptions/Exception.js';

const formatError = (code, status, message) => {
    return {
        error: {
            status,
            type: code,
            message,
        },
    };
};

const ExceptionHandler = (err, req, res, next) => {
    if (!err) {
        return next();
    }

    if (err instanceof Exception) {
        return res.status(err.status).json(formatError(err.code, err.status, err.message));
    }

    return res.status(500).json(formatError('UNEXPECTED_ERROR', 500, err.message));
};

export default ExceptionHandler;
