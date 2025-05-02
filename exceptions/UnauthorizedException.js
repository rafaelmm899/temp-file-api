import { Exception } from './Exception.js';

export class UnauthorizedException extends Exception {
    constructor(message = 'Unauthorized') {
        super(message, 'UNAUTHORIZED_ERROR', 401);
    }
}
