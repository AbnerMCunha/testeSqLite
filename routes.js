import { Router } from "express"; 
import { createTableTask, insertTask, selectTask } from "./Controller/taskController.js";
const router = Router();

console.log("-----------arquivo de rotas")
createTableTask();
router.get('/', ()=>console.log("raiz"));
router.post('/tasks', insertTask);
router.get('/tasks', selectTask);

export default router;