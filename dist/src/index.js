"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
const suggestions_1 = require("./suggestions");
exports.default = {
    search: search_1.default,
    getSuggestions: suggestions_1.default,
};