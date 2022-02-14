import multer from 'multer';
import path from 'path'; //forma de fazer caminhos relativos no node
export default{
    storage: multer.diskStorage({
        // em destination pode se usar outras coisas como googledrive, icloud e diversos outros
        destination: path.join(__dirname, '..', '..','uploads'), // não se usa barra pq no windows e mac é diferente
        filename: (request, file, cb) =>{
            //alterandro o nome do arquivo pq duas pessoas podem adicionar um igual
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName); // primeiro parametro é o erro e o segundo é o resultado, por isso se usa null jaq é dificil o codigo acima dar erro
        }
    })
}
