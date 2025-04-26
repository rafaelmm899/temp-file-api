class NotFoundException extends Error {
    constructor(message = 'Entity Not found') {
        super();
        this.message = message;
        this.code = 'NOT_FOUND_ERROR';
    }
}

export default NotFoundException;
