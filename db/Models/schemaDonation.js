const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    createdDateAt: { type: Date, default: Date.now },
    firstName: String,
    lastName: String,
    email: String,
    amount: Number
})

export const ModeloDonation = mongoose.models.donation || mongoose.model('donation', DonationSchema);