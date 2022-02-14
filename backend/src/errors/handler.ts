import {ErrorRequestHandler} from 'express'; //tipagem padrao para qualquer Error Handler
import {ValidationError} from 'yup' //trativa diferente para o erro de validação

interface ValidationErrors{
    [key: string]: string[];
    // o erro está aq no parâmetro
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError){
        //se o erro for uma instancia da classe ValidationError
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
          });
//      error.inner = onde estão os erros
        return response.status(400).json({message: 'Validation fails', errors})
    }

    console.error(error)
    
    return response.status(500).json({message: 'Internal server error'}) //quem consome não sabe qual erro aconteceu
}
export default errorHandler;

