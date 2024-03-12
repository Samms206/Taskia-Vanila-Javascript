//Mengurus business logic
//CRUD

class User{

    constructor(){
        this.users = this.getUsers() || [];
    }

    saveUser(userData){
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

    getUsers(){
        return JSON.parse(localStorage.getItem('users')) || [];
    }

}