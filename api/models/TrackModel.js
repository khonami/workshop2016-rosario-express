'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class TrackModel {

	getList () {

		return dataBase.find({docType: docTypes.TRACK})
	}

	getTrack(trackId) {

		return dataBase.findOne({_id: trackId, docType: docTypes.TRACK});
	}

	getComments (trackId){

		return new Promise ((resolve, reject) => {

			this.getTrack(trackId)
			.then(track => {
				return track.comments;
			})
			.then(track => resolve(track))
			.catch(error => reject(error));
		});
	}

	addComment (trackId, comment) {

		return new Promise ((resolve, reject) => {
			dataBase.update({_id: trackId}, { $push: { comments: comment }}, {})
			.then(affectedRow => {
				resolve(affectedRow);
			})
			.catch(error => reject(error));
		});
	}
}
module.exports.TrackModel = TrackModel;
module.exports.instance = new TrackModel();