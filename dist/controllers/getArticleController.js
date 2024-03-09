"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const articleModel_1 = require("../models/articleModel");
const getArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allArticles = articleModel_1.ArticleModel.findAll();
        if (!allArticles)
            return res.status(404).json({ msg: "No articles found" });
        else
            return res.status(200).json(allArticles);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Server Error' });
    }
});
exports.default = getArticleController;
//# sourceMappingURL=getArticleController.js.map