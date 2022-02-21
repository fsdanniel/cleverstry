import express from 'express';
import 'express-async-errors'; // importar sempre depois do express
import './database/connection'
import routes from './routes'
import path from 'path'; //sempre que for usar caminhos importe path
import cors from 'cors'
import errorHandler from './errors/handler'; 

const app = express();
app.use(cors())
app.use(express.json())
app.use(routes);




app.use(errorHandler); // exception handler!!!!

app.listen(3333);