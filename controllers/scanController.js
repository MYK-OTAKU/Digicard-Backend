// controllers/scanController.js
const { Scan } = require("../models");
const axios = require("axios");

exports.scanQRCode = async(req, res) => {
    try {
        const scan = await Scan.create(req.body);
        res.status(201).json(scan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.analyzeScan = async(req, res) => {
    try {
        const scan = await Scan.findByPk(req.params.id);
        if (!scan) {
            return res.status(404).json({ error: "Scan not found" });
        }

        // Placeholder for analysis logic
        let analysisResult;
        if (scan.type === "URL") {
            analysisResult = await axios.get(
                `https://www.virustotal.com/api/v3/urls/${scan.data}`, {
                    headers: {
                        "x-apikey": process.env.VIRUSTOTAL_API_KEY,
                    },
                }
            );
        } else {
            analysisResult = { message: "Analysis not implemented for this type" };
        }

        res.json({ scan, analysisResult: analysisResult.data });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};