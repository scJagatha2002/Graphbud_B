const db = require("../db");


//Service to get a company by its Id.
const getCompany = async (id) => {
    
    try {
        
        const company = await db.query("SELECT * FROM COMPANY WHERE Id = ?",id);                             //use of ? to avoid sql injection
        return company;
        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",[error.sqlMessage,"failure"]);         //Adding logging information to logging table
        console.log(error); 
    }   
    
}

module.exports = getCompany;

