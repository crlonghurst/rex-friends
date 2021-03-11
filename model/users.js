const query = require('../database/queries');

class Users {
    constructor(firstName, lastName, username, user_password){
        this.user_first_name = firstName;
        this.user_last_name = lastName;
        this.username = username;
        this.user_password = user_password;
    }
    insert(){  
        let insert = false;
        query.getOneUser(this.username,function(result){
            if(result.length > 0){
                insert = false;
                return insert;
            }
            else{
                insert = true;
                return;
            }
        });
        if(!insert){
            return "This user already exists.";
        }
        else{
            query.insertNewUser(this);
            return "User inserted";
        }
    }
    

    
}


const user = new Users('Logan', 'Longhurst', 'torchwood', 'abadPass');
console.log(user.insert());