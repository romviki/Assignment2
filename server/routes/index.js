"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = require("../controllers/index");
router.get('/', index_1.displayHomePage);
router.get('/home', index_1.displayHomePage);
router.get('/about', index_1.displayAboutPage);
router.get('/projects', index_1.displayProjectsPage);
router.get('/services', index_1.displayServicesPage);
router.get('/contact', index_1.displayContactPage);
router.get('/login', index_1.displayLoginPage);
router.post('/login', index_1.processLoginPage);
router.get('/logout', index_1.processLogoutPage);
exports.default = router;
//# sourceMappingURL=index.js.map