const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: false,
    },
    bankDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
    },
});

studentSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

studentSchema.set("toJSON", {
    virtuals: true,
});

exports.Student = mongoose.model("Student", studentSchema);
