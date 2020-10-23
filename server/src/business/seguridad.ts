import connectDB from '../database';
import { ConnectionPool, pool } from 'mssql';


async function  ConsultarRegistro(){
    const conexión =  await connectDB();
    var registros =  await conexión.query('select * from TipoUsuario');
    return registros.recordset;
}
async function  AgregarRegistro(body:string){
    const conexión =  await connectDB();
    var consulta = ('INSERT INTO TipoUsuario (idTipoUsuario,TipoUsuario)VALUES ('+ body.idTipoUsuario + ','+"'"+body.TipoUsuario+"');");
    console.log(consulta);
    var registros =  await conexión.query(consulta);
    console.dir('Ya consultamos');
}
async function  ConsultarunRegistro(id:string){
    const conexión =  await connectDB();
    var registros =  await conexión.query('select * FROM TipoUsuario WHERE idTipoUsuario = '+[id]);
    return registros.recordset;
}
async function EliminarRegistro(id:string){
    const conexión = await connectDB();
    await conexión.query('DELETE FROM TipoUsuario WHERE idTipoUsuario ='+[id]);
}
async function ActualizarRegistro(id:string,body:string){
    const conexión = await connectDB();
    var consulta = ('UPDATE TipoUsuario SET TipoUsuario ='+"'"+body.TipoUsuario+"'WHERE idTipoUsuario = "+body.idTipoUsuario);
    await conexión.query(consulta);
}
export  {ConsultarRegistro, AgregarRegistro,ConsultarunRegistro,EliminarRegistro,ActualizarRegistro};

