import { UnauthorizedException } from '../exceptions/UnauthorizedException.js';

const AuthChecker = (req, res, next) => {
    if (
        !req.headers.authorization ||
        req.headers.authorization !== `Bearer ${process.env.API_KEY}`
    ) {
        throw new UnauthorizedException();
    }
    next();
};

export default AuthChecker;
