'use strict';

const track = require('../models/TrackModel').instance;

class TrackController {

	getList (req, res) {
		track.getList()
		.then(documents => res.json(documents))
		.catch(error => res.json({error: error.message}));
	}

	getComments(req, res) {
		track.getComments(req.params.id)
		.then(documents => res.json(documents))
		.catch(error => res.json({error: error.message}));
	}

	addComment(req, res) {
		track.addComment(req.params.id, req.body.message)
		.then(affectedRows => affectedRows == 1 ? res.sendStatus(200) : res.sendStatus(500))
		.catch(error => res.json({error: error.message}));
	}
}

exports.TrackController = TrackController;
exports.instance = new TrackController();