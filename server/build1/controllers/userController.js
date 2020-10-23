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
const seguridad_1 = require("../business/seguridad");
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('En el controlador');
            var TipoUsuario = yield seguridad_1.ConsultarTipoUsuario();
            console.log(TipoUsuario.TipoUsuario);
            res.send('Usuario' + TipoUsuario.TipoUsuario);
        });
    }
    getOne(req, res) {
        res.json({ text: 'This is User' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var agreg = yield seguridad_1.AgregarTipoUsuario(req.body);
            res.json({ text: 'creating a user' + [req.body] });
        });
    }
    delete(req, res) {
        res.json({ text: 'eliminando a user' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'Actualizando a user' + req.params.id });
    }
}
const userController = new UserController;
exports.default = userController;
