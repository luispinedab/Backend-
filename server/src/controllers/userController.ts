import {Request, Response} from 'express';
import {ConsultarRegistro,AgregarRegistro,ConsultarunRegistro,EliminarRegistro,ActualizarRegistro} from '../business/seguridad';
class UserController{
    public  async list (req:Request,res:Response) {
         console.log('En el controlador');
         var TipoUsuario = await ConsultarRegistro();
         console.log(TipoUsuario);
         res.send(TipoUsuario);
    }
    public async getOne(req:Request,res:Response){
        const  id = req.params.id;
        var unTipoUsuario =  await ConsultarunRegistro(id);
        if(unTipoUsuario.length>0){
            return res.json(unTipoUsuario[0]);
        }
        res.status(440).json({text: 'El Registro No Existe'})
    }      
    public async create (req:Request,res:Response){
   
        var agreg = await AgregarRegistro(req.body);
        
        res.json({text: 'creating a user'+ [req.body]});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await EliminarRegistro(id);
        res.json({message:'The User was deleted'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params;
        var actualizar = await ActualizarRegistro(id,req.body);
        res.json({text: 'Actualizando a user'+ id});
    }
}
 const userController =new UserController;
 export default userController;
