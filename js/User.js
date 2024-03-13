//Mengurus business logic
//CRUD

class User {

    constructor() {
        this.users = this.getUsers() || [];
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            //...(titik tiga merupakan Spread syntax)
            ...userData,
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        //return window.location.href = '../signin.html';
        return {
            success: true,
        }
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    signInUser(usernameByInput) {
        //proses pemerikasaan username di local storage
        const userExist = this.users.some(user => user.username.toLowerCase() == usernameByInput.toLowerCase());

        if (userExist) {
            //proses pengembalian data ke signIn.js controller
            return {
                success: true,
                username,
            }
        } else {
            return {
                success: false,
                message: "data tidak ditemukan!",
            }
        }

        //proses pengembaliand data ke signin.js controller
        return {
            success: true,
            username
        }
    }

}