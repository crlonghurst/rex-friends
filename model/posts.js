const query = require('../database/queries');

class Posts {
    constructor(user, users_id, post_title, post_content, posted_date){
        this.user = user
        this.users_id = users_id,
        this.post_title = post_title,
        this.post_content = post_content,
        this.posted_date = posted_date
    }
    insert(){  
        let insert = false;
        query.getOneUser(this.user.username,function(result){
            if(result.length > 0){
                insert = false;
                return insert;
            }
            else{
                this.users_id = result[0].users_id;
                insert = true;
                return;
            }
        });
        if(!insert){
            return "This user already exists.";
        }
        else{
            query.insertNewPost(this);
            return "Post Inserted";
        }
    }
    

    
}
