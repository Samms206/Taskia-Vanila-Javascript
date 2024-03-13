class Task{
    constructor() {
        this.tasks = this.getTasks() || [];
    }

    getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    saveTask(taskData){
        const newTaskData = {
            id: Date.now(),
            isCompelted: false,
            //...(titik tiga merupakan Spread syntax)
            ...taskData,
        };
        this.tasks.push(newTaskData);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        return {
            success: true
        }
    }


}