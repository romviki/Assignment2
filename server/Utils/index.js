"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = exports.UserName = void 0;
function UserName(req) {
    if (req.user) {
        let user = req.user;
        return user.username.toString();
    }
    return '';
}
exports.UserName = UserName;
function AuthGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=index.js.map