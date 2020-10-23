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
exports.ActualizarRegistro = exports.EliminarRegistro = exports.ConsultarunRegistro = exports.AgregarRegistro = exports.ConsultarRegistro = void 0;
const database_1 = __importDefault(require("../database"));
function ConsultarRegistro() {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield database_1.default();
        var registros = yield conexión.query('select * from TipoUsuario');
        return registros.recordset;
    });
}
exports.ConsultarRegistro = ConsultarRegistro;
function AgregarRegistro(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield database_1.default();
        var consulta = ('INSERT INTO TipoUsuario (idTipoUsuario,TipoUsuario)VALUES (' + body.idTipoUsuario + ',' + "'" + body.TipoUsuario + "');");
        console.log(consulta);
        var registros = yield conexión.query(consulta);
        console.dir('Ya consultamos');
    });
}
exports.AgregarRegistro = AgregarRegistro;
function ConsultarunRegistro(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield database_1.default();
        var registros = yield conexión.query('select * FROM TipoUsuario WHERE idTipoUsuario = ' + [id]);
        return registros.recordset;
    });
}
exports.ConsultarunRegistro = ConsultarunRegistro;
function EliminarRegistro(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield database_1.default();
        yield conexión.query('DELETE FROM TipoUsuario WHERE idTipoUsuario =' + [id]);
    });
}
exports.EliminarRegistro = EliminarRegistro;
function ActualizarRegistro(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield database_1.default();
        var consulta = ('UPDATE TipoUsuario SET TipoUsuario =' + "'" + body.TipoUsuario + "'WHERE idTipoUsuario = " + body.idTipoUsuario);
        yield conexión.query(consulta);
    });
}
exports.ActualizarRegistro = ActualizarRegistro;
