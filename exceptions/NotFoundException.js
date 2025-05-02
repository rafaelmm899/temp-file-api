import { Exception } from './Exception.js';

class NotFoundException extends Exception {
    constructor(message = 'Entity Not found') {
        super(message, 'NOT_FOUND_ERROR', 404);
    }
}

export default NotFoundException;
