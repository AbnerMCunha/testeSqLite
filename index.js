import routes from "./routes.js";
import cors from 'cors';
import express from 'express';

const portaHttp = 8001;
const app = express();
app.use(express.json());    //para compreender as respostas json das requisições
app.use(cors());
app.use(routes);


app.get('/', ()=> console.log("raiz"));

app.listen(portaHttp, ()=> console.log(`Porta : ${portaHttp}`));


