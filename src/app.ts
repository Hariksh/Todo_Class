
import express from 'express'
import mongoose from 'mongoose';
interface App_Interface{
    startServer():void;
    connectDatabase():void;
    initializeRoutes():void;

}
export default class App implements App_Interface{
    Port:number|string;
    app:express.Application

    constructor(){
        this.Port = 4000
        this.app = express()
        this.startServer()
        this.connectDatabase()
        this.initializeRoutes()
    }

    startServer():void{
        this.app.listen(this.Port,() => {
            console.log(`server is running on port ${this.Port}`)
        })
    };
    async connectDatabase():Promise<void>{
        try{
            await mongoose.connect("mongodb+srv://hariksh2007_db_user:Hariksh%4007@cluster0.704vsvr.mongodb.net/todo_app?retryWrites=true&w=majority")
            console.log('database connected')
        }
        catch(err){
            console.log(err)
        }
    };
    initializeRoutes():void{
        this.app.use(express.json())
    };
}
