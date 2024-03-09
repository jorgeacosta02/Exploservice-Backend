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
exports.postArticleController = void 0;
const articleModel_1 = require("../models/articleModel");
const postArticleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, brand, group1, group2, } = req.body;
    try {
        const newArticle = yield articleModel_1.ArticleModel.create({
            name,
            brand,
            group1,
            group2,
        });
        if (!newArticle) {
            return res.status(400).json('Error creating the element');
        }
        res.status(201).json(newArticle);
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Server error");
    }
});
exports.postArticleController = postArticleController;
//# sourceMappingURL=postArticleController.js.map