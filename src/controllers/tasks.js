let counter = 1;
const tasks = [];

class Tasks {


    static getAll(req, res) {
        res.send(tasks)
    }
    static create(req, res) {
        const title = req.body.title;
        if (!title) {
            res.status(400).send('Incorrect body')
            return;
        }
        const newTask = {
            id: counter,
            title

        }
        counter++;
        tasks.push(newTask)
        res.sendStatus(201)
    }

    static get(req, res) {

        const taskId = parseInt(req.params.id)
        const requested = tasks.find(task => task.id === taskId)
        if (!requested) {
            res.status(404).send(`task not found`)
            return;
        }
        res.json(requested);  /// 204 Won’t Return Content
    }


    static delete(req, res) {

        const taskId = parseInt(req.params.id)
        const index = tasks.findIndex(task => task.id === taskId)
        if (index < 0) {
            res.status(404).send(`task not found`)
            return;
        }
        tasks.splice(index, 1);

        res.sendStatus(204);  /// 204 Won’t Return Content
    }


}



module.exports = Tasks;