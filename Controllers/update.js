const express = require('express');
const router = express.Router();
const db = require("../db")
const service = require("../Services/update")

//"http://localhost:3000/api/company/id"
router.put("/:id",async(req,res) => {
    try {
        const {Id,Name,Location} = req.body;
        const company = await service(Id,Name,Location);
        
        
        if(company.affectedRows === 0){
            throw new Error("No record of such company available");                  
        };
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["Updated Successfully","success"]);                                     //Adding logging information to logging table
        res.send("Updated Successfully");                                                                                                      //Sending response message

        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["error fetching an api","failure"]);                                    //Adding logging information to logging table
        throw error; 
        
    }
    
})

module.exports = router;