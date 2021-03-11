const express = require('express');
const query = require('../database/queries');
const router = express.Router();


async function populateUsers(){
    const tempArr = await query.selectAllFromUsers(function(err, result){
        // console.log(result);
        if(err){
            console.log(err);
            return next("Mysql error, check your query");
        }
        else{
            const tempArr = [];
            for (var i = 0; i < result.length; i++){
                tempArr.push(result[i])
            }
            return tempArr;

        }
        
    })
    return tempArr;
}


module.exports = {
    populateUsers: this.populateUsers
}