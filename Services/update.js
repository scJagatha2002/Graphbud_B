const db = require("../db");


//Service to update a company by id
const Update = async (id,name,location) => {
    try {
        const [company] = await db.query("UPDATE COMPANY SET Name = ?, Location = ? WHERE Id = ?",[name,location,id]);                       
        return company;
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",[error.sqlMessage,"failure"]);                                         //Adding logging information to logging table
        throw new Error("Failed to update company");
    }
};




module.exports = Update;