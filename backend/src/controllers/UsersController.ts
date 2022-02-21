import { Request, Response } from 'express' //sem eles os argumentos da função async iam dar erro por não serem nativos e/ou pertencerem diretamente aquela função

import {getRepository} from 'typeorm'; // usado para adicionar as informações no bd
import userView from '../views/user_view' // para ser usado no async show
import User from '../models/User'
import * as Yup from 'yup'; // diferente a importação pq eles não tem um export default

export default{
    //listando 
    async index(request:Request, response:Response){
        const userRepository = getRepository(User);

        const users = await userRepository.find();//encontra todos os usarios dentro do repositório
        return response.json(userView.renderMany(users));// usa no plural pq são varios usarios
    },
    
    async show(request:Request, response:Response){
        const {id} = request.params // oque fica dentro das chaves deve ser igual ao parametro adicionado na rota
        
        const userRepository = getRepository(User);

        const user = await userRepository.findOneOrFail(id);//encontra o usario ou da erro
        return response.json(userView.render(user));// usa singular pq é só um orfananto 
    },

    async create(request:Request, response:Response){
        //console.log(request.files); //imagens vem dentro desse array
        const {
            name,
            username,
            email,
            password
        } = request.body //desestruturando o objeto
    
        const userRepository = getRepository(User); // utiliza o repositorio e passa nossa classe como arg


        const data = {
            //validação de dados
            name,
            username,
            email,
            password
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            username: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required()

        })

        //fazendo a validação
        await schema.validate(data, {
            abortEarly:false, //ao primeiro campo errado ele ja retorna o erro, sendo falso ele vai continuar, não vai abortar, e vai mostrar por fim TODOS os campos invalidos
        })

        const user = userRepository.create(data)

       
        await userRepository.save(user);
    
        //return response.json({message: 'Hello world'})
        return response.status(201).json(user) //envia um status(codigo) SEMANTICO ao insominia que vai medar o significado do processo realizado
        // codigo 201 significa criado existem vaaarios outros
    }
}