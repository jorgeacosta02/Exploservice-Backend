"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postArticleController_1 = require("../controllers/postArticleController");
const getAllArticlesController_1 = require("../controllers/getAllArticlesController");
const articleRouter = (0, express_1.Router)();
articleRouter.post('/', postArticleController_1.postArticleController);
articleRouter.get('/', getAllArticlesController_1.getAllArticlesController);
exports.default = articleRouter;
//# sourceMappingURL=articleRoutes.js.map