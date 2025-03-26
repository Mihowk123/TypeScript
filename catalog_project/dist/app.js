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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var categories = [];
function fetchCategoryData() {
    return __awaiter(this, void 0, void 0, function () {
        var electronicsResponse, electronicsData, furnitureResponse, furnitureData, booksResponse, booksData, clothesResponse, clothesData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('electronics.json')];
                case 1:
                    electronicsResponse = _a.sent();
                    return [4 /*yield*/, electronicsResponse.json()];
                case 2:
                    electronicsData = _a.sent();
                    categories.push({
                        id: '1',
                        name: electronicsData.categoryName,
                        shortname: electronicsData.shortname,
                        notes: electronicsData.notes,
                        products: electronicsData.items
                    });
                    return [4 /*yield*/, fetch('furniture.json')];
                case 3:
                    furnitureResponse = _a.sent();
                    return [4 /*yield*/, furnitureResponse.json()];
                case 4:
                    furnitureData = _a.sent();
                    categories.push({
                        id: '2',
                        name: furnitureData.categoryName,
                        shortname: furnitureData.shortname,
                        notes: furnitureData.notes,
                        products: furnitureData.items
                    });
                    return [4 /*yield*/, fetch('books.json')];
                case 5:
                    booksResponse = _a.sent();
                    return [4 /*yield*/, booksResponse.json()];
                case 6:
                    booksData = _a.sent();
                    categories.push({
                        id: '3',
                        name: booksData.categoryName,
                        shortname: booksData.shortname,
                        notes: booksData.notes,
                        products: booksData.items
                    });
                    return [4 /*yield*/, fetch('clothes.json')];
                case 7:
                    clothesResponse = _a.sent();
                    return [4 /*yield*/, clothesResponse.json()];
                case 8:
                    clothesData = _a.sent();
                    categories.push({
                        id: '4',
                        name: clothesData.categoryName,
                        shortname: clothesData.shortname,
                        notes: clothesData.notes,
                        products: clothesData.items
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function renderCategories() {
    var categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';
    categories.forEach(function (category) {
        var categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        var categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);
        category.products.forEach(function (product) {
            var productDiv = document.createElement('div');
            productDiv.classList.add('product');
            var productImage = document.createElement('img');
            productImage.src = "https://place-hold.it/200x200";
            productDiv.appendChild(productImage);
            var productName = document.createElement('h4');
            productName.textContent = product.name;
            productDiv.appendChild(productName);
            var productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            productDiv.appendChild(productDescription);
            var productPrice = document.createElement('p');
            productPrice.textContent = "\u0426\u0456\u043D\u0430: ".concat(product.price);
            productDiv.appendChild(productPrice);
            categoryDiv.appendChild(productDiv);
        });
        categoriesContainer.appendChild(categoryDiv);
    });
}
function showRandomCategory() {
    var randomIndex = Math.floor(Math.random() * categories.length);
    var randomCategory = categories[randomIndex];
    var categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';
    var categoryTitle = document.createElement('h2');
    categoryTitle.textContent = randomCategory.name;
    categoriesContainer.appendChild(categoryTitle);
    randomCategory.products.forEach(function (product) {
        var productDiv = document.createElement('div');
        productDiv.classList.add('product');
        var productImage = document.createElement('img');
        productImage.src = "https://place-hold.it/200x200";
        productDiv.appendChild(productImage);
        var productName = document.createElement('h4');
        productName.textContent = product.name;
        productDiv.appendChild(productName);
        var productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);
        var productPrice = document.createElement('p');
        productPrice.textContent = "\u0426\u0456\u043D\u0430: ".concat(product.price);
        productDiv.appendChild(productPrice);
        categoriesContainer.appendChild(productDiv);
    });
}
document.getElementById('catalogLink').addEventListener('click', function (event) {
    event.preventDefault();
    renderCategories();
});
document.getElementById('specialsLink').addEventListener('click', function (event) {
    event.preventDefault();
    showRandomCategory();
});
fetchCategoryData().then(function () {
    renderCategories();
});
