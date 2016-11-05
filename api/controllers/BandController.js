'use strict';

const band = require('../models/BandModel').instance;

class TrackController {

	getBand (req,res) {
		band.getBand(req.params.id)
		.then(document => res.json(document))
		.catch(error => res.json({error: error.message}));
	}

	getList (req, res) {
		band.getList()
		.then(documents => res.json(documents))
		.catch(error => res.json({error: error.message}));
	}

	getAlbums(req, res) {
		band.getBandAlbums(req.params.id)
		.then(documents => res.json(documents))
		.catch(error => res.json({error: error.message}));
	}

	getArtists(req, res) {
		band.getBandArtists(req.params.id)
		.then(documents => res.json(documents))
		.catch(error => res.json({error: error.message}));
	}
}

exports.TrackController = TrackController;
exports.instance = new TrackController();