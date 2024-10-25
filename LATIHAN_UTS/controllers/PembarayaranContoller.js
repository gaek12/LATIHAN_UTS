const Pembayaran = require('../models/pembayaran');

exports.index = async (req, res) => {
    try {
        const data = await Pembayaran.find();
        res.status(200).json({
            code: 200,
            message: "Success",
            data: data
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: "Failed"
        });
    }
};

exports.insert = async (req, res) => {
    const pembayaran = new Pembayaran(req.body);
    try {
        await pembayaran.save();
        res.status(200).json({
            code: 200,
            message: "Success"
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: "Failed"
        });
    }
};
