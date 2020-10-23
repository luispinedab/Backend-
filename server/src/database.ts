import sql from 'mssql'; 
import keys from './keys';

     async function connectDB(){
    const pool = new sql.ConnectionPool(keys.database);
    try{
        await pool.connect();
        console.log('Connected to database');
        return pool;
    }
    catch(err){
        console.log('Database connection failed',err);
        return err;
    }
}

export default connectDB;