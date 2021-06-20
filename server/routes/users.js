"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const user_1 = require("../controllers/user");
const Utils_1 = require("../Utils");
router.get('/list', user_1.displayUserList);
router.get('/', user_1.displayUserList);
router.get('/add', Utils_1.AuthGuard, user_1.displayAddPage);
router.post('/add', Utils_1.AuthGuard, user_1.processAddPage);
router.get('/edit/:id', Utils_1.AuthGuard, user_1.displayEditPage);
router.post('/edit/:id', Utils_1.AuthGuard, user_1.processEditPage);
router.get('/delete/:id', Utils_1.AuthGuard, user_1.processDeletePage);
//# sourceMappingURL=users.js.map