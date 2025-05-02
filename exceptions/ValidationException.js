import { Exception } from './Exception.js';

class ValidationException extends Exception {
    constructor(message = 'There are some errors in the request') {
        super(message, 'VALIDATION_ERROR', 422);
    }
}

export default ValidationException;
