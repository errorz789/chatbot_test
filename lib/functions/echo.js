"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.echo = void 0;
const echo = (req, res) => {
    res.status(200).json({ message: req.body.message }).end();
};
exports.echo = echo;
//# sourceMappingURL=echo.js.map