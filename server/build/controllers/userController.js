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
            var TipoUsuario = yield seguridad_1.ConsultarRegistro();
            console.log(TipoUsuario);
            res.send(TipoUsuario);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            var unTipoUsuario = yield seguridad_1.ConsultarunRegistro(id);
            if (unTipoUsuario.length > 0) {
                return res.json(unTipoUsuario[0]);
            }
            res.status(440).json({ text: 'El Registro no Existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var agreg = yield seguridad_1.AgregarRegistro(req.body);
            res.json({ text: 'creating a user' + [req.body] });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield seguridad_1.EliminarRegistro(id);
            res.json({ message: 'The User was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var actualizar = yield seguridad_1.ActualizarRegistro(id, req.body);
            res.json({ text: 'Actualizando a user' + id });
        });
    }
}
const userController = new UserController;
exports.default = userController;
