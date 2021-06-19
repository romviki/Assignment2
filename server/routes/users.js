"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const user_1 = require("../controllers/user");
router.get('/list', user_1.displayUserList);
router.get('/', user_1.displayUserList);
router.get('/add', user_1.displayAddPage);
router.post('/add', user_1.processAddPage);
router.get('/edit/:id', user_1.displayEditPage);
router.post('/edit/:id', user_1.processEditPage);
router.get('/delete/:id', user_1.processDeletePage);
//# sourceMappingURL=users.js.map