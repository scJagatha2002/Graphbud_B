const db = require("../db");


//Service to get all the companies
const getAllCompanies = async () => {
    
    try {
        //Destructuring
        const [companies] = await db.query("SELECT * FROM COMPANY");                      
        return companies;
        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",[error.sqlMessage,"failure"]);         //Adding logging information to logging table
        console.log(error); 
    }   
    
}

module.exports = getAllCompanies;

