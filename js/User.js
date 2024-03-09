//Mengurus business logic
//CRUD

class User{

    saveUser(userData){
        const newUser = {
            id: Date.now(),
            //...(titik tiga merupakan Spread syntax)
            ...userData,
        };
        console.log("userData : " + userData.username);
    }

}