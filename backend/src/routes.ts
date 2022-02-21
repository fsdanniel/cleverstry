import { Router } from 'express';
import multer from 'multer';
import UserController from './controllers/UsersController'


const routes = Router();


//MVC 
//Model: representatividade de uma entidade na aplicação
//View: frontend
//Controllers: logica das rotas
// as nossas rotas precisam ficar dentro de um controller!!

//routes.post('/orphanages', async (request, response)=>{
    //console.log(request.body); // vai passar os valores json que colocamos lá no insomnia
    routes.get('/orphanages', UserController.index) //listando orfanatos
    routes.get('/orphanages/:id', UserController.show) //listando orfanatos
export default routes;