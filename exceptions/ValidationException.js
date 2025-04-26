class ValidationException extends Error {
    constructor(message = 'There are some errors in the request') {
        super();
        this.message = message;
        this.code = 'VALIDATION_ERROR';
    }
}

export default ValidationException;
