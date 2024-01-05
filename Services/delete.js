const db = require("../db");


//Service to delete a company by its Id.
const Delete = async (id) => {
    
    try {
        
        const company = await db.query("DELETE FROM COMPANY WHERE Id = ?",id);                             //use of ? to avoid sql injection
        return company;
        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",[error.sqlMessage,"failure"]);      //Adding logging information to logging table
        console.log(error); 
    }   
    
}

module.exports = Delete;