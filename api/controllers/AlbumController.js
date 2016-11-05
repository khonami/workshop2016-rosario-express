'use strict';

const album = require('../models/AlbumModel').instance;

class AlbumController {

	getList (req, res) {
		album.getList()
		.then(documents => res.json(documents))
		.catch(error => res.json({error: error.message}));
	}

	getAlbum (req, res) {
		album.getAlbum(req.params.id)
		.then(document => res.json(document))
		.catch(error => res.json({error: error.message}));
	}

	getTracks (req, res) {
		album.getTracks(req.params.id)
		.then(document => res.json(document))
		.catch(error => res.json({error: error.message}));
	}
}

exports.AlbumController = AlbumController;
exports.instance = new AlbumController();