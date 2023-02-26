const express = require("express");
const route = express.Router();
const { Bank } = require("../models/bank");

route.get("/", async function (req, res) {
    const allBankAccounts = await Bank.find();

    if (!allBankAccounts) {
        res.status(400).json({ success: false, message: "Error occured" });
    }
    res.status(200).json(allBankAccounts);
});

route.get("/:id", async function (req, res) {
    const allBankAccount = await Bank.findById(req.params.id);

    if (!allBankAccounts) {
        res.status(400).json({ success: false, message: "Error occured" });
    }
    res.status(200).json(allBankAccount);
});

route.post("/", async function (req, res) {
    let bank = new Bank({
        bankName: req.body.bankName,
        customerID: req.body.customerID,
        accountNumber: req.body.accountNumber,
    });
    bank = await bank.save();
    if (!bank) {
        res.status(400).json({ success: false, message: "Error occured" });
    }
    res.status(200).json(bank);
});

route.put("/:id", async function (req, res) {
    const bankUpdate = await Bank.findByIdAndUpdate(
        req.params.id,
        {
            customerID: req.body.customerID,
            accountNumber: req.body.accountNumber,
        },
        { new: true }
    );
    if (!bankUpdate) {
        res.status(400).json({ success: false, message: "Error occured" });
    }
    res.status(200).json(bankUpdate);
});

module.exports = route;
