"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controllers/controller");
const app = express_1.default();
app.get('/', (req, res) => {
    const resultado = controller_1.sumar(2, 1);
    res.send(`${resultado}`);
});
app.listen(3001, () => console.log('Servidor corriendo'));
