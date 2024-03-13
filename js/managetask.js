document.addEventListener('DOMContentLoaded', () => {
    //membuat instance dari object task
    const myTasks = new Task();
    //membuat variable untuk mengambil seluruh Task
    const existingTask = myTasks.getTasks();

    const taskWrapper = document.getElementById('taskWrapper');
    const taskWrapperEmpty = document.getElementById('taskWrapperEmpty');

    function displayAllTask() {
        if (existingTask.length === 0) {
            console.log('task not found');
        } else {
           console.log('task found');
        }
    }

    displayAllTask();
})