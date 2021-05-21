const mongoose = require('mongoose');

const signatureSchema = new mongoose.Schema({
    createdDateAt: { type: Date, default: Date.now },
    firstName: String,
    lastName: String,
    email: String,
    type: String,
    phone: Number
})

export const SignatureModel = mongoose.models.signature || mongoose.model('signature', signatureSchema);




