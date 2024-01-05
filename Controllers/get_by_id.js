const express = require('express');
const router = express.Router();
const db = require("../db")
const service = require("../Services/getCompany")

//"http://localhost:3000/api/company/id""
router.get("/:id",async(req,res) => {
    try {
        const [company] = await service(req.params.id);
        if(company.length===0){
            throw new Error("Invalid Id");
        }
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["fetched successfully","success"]);                             //Adding logging information to logging table
        res.send(company);                                                                                                             //SSending response message
        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["error fetching an api","failure"]);                            //Adding logging information to logging table
        throw error;
        
    }
    
})

module.exports = router;