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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgregarTipoUsuario = exports.ConsultarTipoUsuario = void 0;
const database_1 = __importDefault(require("../database"));
function ConsultarTipoUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield database_1.default();
        var registros = yield conexión.query('select * from TipoUsuario');
        return registros.recordset[5];
    });
}
exports.ConsultarTipoUsuario = ConsultarTipoUsuario;
function AgregarTipoUsuario(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield database_1.default();
        console.log(body);
        var registros = conexión.query('INSERT INTO TipoUsuario ' + body);
        console.log('Ya consultamos');
    });
}
exports.AgregarTipoUsuario = AgregarTipoUsuario;
