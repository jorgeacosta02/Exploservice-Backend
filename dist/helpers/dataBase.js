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
const locationModel_1 = require("../models/locationModel");
const dataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    const articles = [
        {
            name: 'Barra perf',
            brand: 'Sandivk',
            group1: 'T38',
            group2: '6m',
        },
        {
            name: 'Barra perf',
            brand: 'FRD',
            group1: 'T45',
            group2: '2m',
        },
        {
            name: 'Barra ini',
            brand: 'Sandvik',
            group1: 'T51',
            group2: '',
        },
        {
            name: 'Barra ini',
            brand: 'FRD',
            group1: 'T45',
            group2: '',
        },
        {
            name: 'Broca',
            brand: 'Sandvik',
            group1: 'T45',
            group2: 'Lisa',
        },
        {
            name: 'Broca',
            brand: 'Atlas',
            group1: 'T38',
            group2: 'Estriada',
        },
        {
            name: 'Fil aire',
            brand: 'filt',
            group1: 'x29',
            group2: 'www',
        },
    ];
    const insertedArticles = yield articleModel_1.ArticleModel.bulkCreate(articles);
    const locations = [
        {
            name: 'Central',
            description: 'Albardón'
        },
        {
            name: 'Prveedor',
            description: ''
        },
        {
            name: 'Descarte',
            description: ''
        },
        {
            name: 'Tocota',
            description: ''
        },
        {
            name: 'Barker',
            description: ''
        },
        {
            name: 'La Garrapata',
            description: ''
        },
    ];
    const insertedLocations = yield locationModel_1.LocationModel.bulkCreate(locations);
});
exports.default = dataBase;
//# sourceMappingURL=dataBase.js.map