const mongoose = require('mongoose');

const pembayaranSchema = new mongoose.Schema({
    transaksi_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    metode_pembayaran: { type: String, required: true },
    jumlah: { type: Number, required: true },
    tanggal_pembayaran: { type: Date, default: Date.now },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Pembayaran', pembayaranSchema);
