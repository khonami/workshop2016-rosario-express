'use strict';

const band = require('../models/BandModel').instance;

class TrackController {

    getList (req, res) {
        band.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }
}
exports.TrackController = TrackController;
exports.instance = new TrackController();