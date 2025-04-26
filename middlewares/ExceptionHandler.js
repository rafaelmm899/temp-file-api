import NotFoundException from '../exceptions/NotFoundException.js';
import ValidationException from '../exceptions/ValidationException.js';

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

    if (err instanceof NotFoundException) {
        return res.status(404).json(formatError(err.code, 404, err.message));
    }

    if (err instanceof ValidationException) {
        return res.status(422).json(formatError(err.code, 422, err.message));
    }

    return res.status(500).json(formatError('UNEXPECTED_ERROR', 500, err.message));
};

export default ExceptionHandler;
