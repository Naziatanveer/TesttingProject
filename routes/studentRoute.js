const express = require("express");
const { Bank } = require("../models/bank");
const router = express.Router();
const { Student } = require("../models/student");

router.get("/", async function (req, res) {
    const allStudents = await Student.find();
    if (!allStudents) {
        res.status(400).json({ success: false, message: "Error occured" });
    }
    res.status(200).json(allStudents);
});

router.post("/", async function (req, res) {
    console.log(req.body);

    const bankDetails = new Bank({
        bankName: req.body.bankName,
        customerID: req.body.customerID,
        accountNumber: req.body.accountNumber,
    });

    console.log(bankDetails);

    let addStudents = new Student({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        mobileNo: req.body.mobileNo,
        bankDetails: bankDetails,
    });
    addStudents = await addStudents.save();

    if (!addStudents) {
        res.status(400).json({ success: false, message: "Error occured" });
    }
    res.status(200).json(addStudents);
});

module.exports = router;
