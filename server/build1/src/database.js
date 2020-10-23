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
const mssql_1 = __importDefault(require("mssql"));
const keys_1 = __importDefault(require("./keys"));
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const pool = new mssql_1.default.ConnectionPool(keys_1.default.database);
        try {
            yield pool.connect();
            console.log('Connected to database');
            return pool;
        }
        catch (err) {
            console.log('Database connection failed', err);
            return err;
        }
    });
}
function ConsultarTipoUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield connectDB();
        var registros = yield conexión.query('select * from TipoUsuario');
        return registros.recordset[2];
    });
}
function AgregarTipoUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        const conexión = yield connectDB();
        var registros = conexión.query('INSERT INTO TipoUsuario ');
        console.log('Ya consultamos');
    });
}
exports.default = ConsultarTipoUsuario;
