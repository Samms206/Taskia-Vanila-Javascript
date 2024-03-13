//digunakan untuk penghubung antara UI HTML dan model User
document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('taskForm');
    const taskManager = new Task();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const dateToday = new Date();
        const day = String(dateToday.getDate()).padStart(2, '0'); 
        const month = String(dateToday.getMonth() + 1).padStart(2, '0');
        const year = dateToday.getFullYear(); 

        const formattedDate = `${day}-${month}-${year}`;

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
            createdAt: formattedDate,
        }

        const result = taskManager.saveTask(taskData);

        if (result.success) {
            alert("proses simpan data sukses");
            // return window.location.href = '../signin.html';
        } else {
            console.log("proses simpan data gagal");
        }


    });

});