const mongoose = require("mongoose");
const bankSchema = mongoose.Schema({
    bankName: {
        type: String,
        required: true,
    },
    customerID: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
        required: true,
    },
});
bankSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

bankSchema.set("toJSON", {
    virtuals: true,
});

exports.Bank = mongoose.model("Bank", bankSchema);
