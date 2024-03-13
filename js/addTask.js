//digunakan untuk penghubung antara UI HTML dan model User
document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('taskForm');
    const taskManager = new Task();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
        }

        const result = taskManager.saveTask(taskData);

        if (result.success) {
            alert("proses simpan data sukses");
            // return window.location.href = '../signin.html';
        }else{
            console.log("proses simpan data gagal");
        }

        
    });

});