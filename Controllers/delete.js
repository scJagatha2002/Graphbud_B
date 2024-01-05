const express = require('express');
const router = express.Router();
const db = require("../db")
const service = require("../Services/delete")

//"http://localhost:3000/api/company/id""
router.delete("/:id",async(req,res) => {
    try {
        const [company] = await service(req.params.id);
        
        if(company.affectedRows===0){
            throw new Error("Company does not exist");
        }
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["deleted successfully","success"]);                          //Adding logging information to logging table
        res.send("Deleted Successfully");                                                                                           //Sending response messge

        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["error fetching an api","failure"]);                        //Adding logging information to logging table
        throw error;
        
    }
    
})

module.exports = router;