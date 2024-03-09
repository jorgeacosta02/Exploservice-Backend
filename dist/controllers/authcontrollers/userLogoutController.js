"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userLogOutController = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0),
    });
    res.sendStatus(200);
};
exports.default = userLogOutController;
//# sourceMappingURL=userLogoutController.js.map