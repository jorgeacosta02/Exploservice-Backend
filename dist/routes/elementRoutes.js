"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postArticleController_1 = require("../controllers/postArticleController");
const elementRouter = (0, express_1.Router)();
elementRouter.post('/', postArticleController_1.postArticleController);
exports.default = elementRouter;
//# sourceMappingURL=elementRoutes.js.map