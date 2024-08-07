import {openDb} from '../configDb.js';

openDb();

export async function createTableTask(){
    console.log("-----------createTableTask")
    openDb().then( db =>{
        db.exec("CREATE TABLE IF NOT EXISTS TASK( taskId INTEGER PRIMARY KEY AUTOINCREMENT, taskDesc VARCHAR(50) ) ;")
    })
}

export async function insertTask(req, res){
    taskDesc = req.body.taskDesc

    console.log("-----------insert")
    openDb().then(db => {
        db.run("INSERT INTO TASK (taskDesc) VALUES(?)", [taskDesc] )
    })
    
}

export async function selectTask(req, res){
    console.log("-----------select")
    open().then(db=>{
        db.all("SELECT * FROM TASK")
        .then( taskResult => res.json(taskResult))
    })
}

