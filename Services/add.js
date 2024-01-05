const db = require("../db");


//Service to add a company..
const Add = async (id,name,location) => {
    
    try {
        
        const company = await db.query("INSERT INTO company VALUES (?, ?, ?)", [id, name,location]);                //use of ? to avoid sql injection
        return company;
        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",[error.sqlMessage,"failure"]);                //Adding logging information to logging table
        
        throw error;
    }   
    
}

module.exports = Add;