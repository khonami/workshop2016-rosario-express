'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class AlbumModel {

    getList () {
        return dataBase.find({docType: docTypes.ALBUM})
    }

    getAlbum(albumId) {

		return dataBase.findOne({_id: albumId, docType: docTypes.ALBUM});
	}

    getTracks(albumId){

    	return new Promise ((resolve, reject) => {
			this.getAlbum(albumId)
			.then(album => {
				const trackIds = album.tracks;
				return dataBase.find({_id: {$in: trackIds}, docType: docTypes.TRACK});
			})
			.then(tracks => resolve(tracks))
			.catch(error => reject(error));
		});
    }
}

module.exports.AlbumModel = AlbumModel;
module.exports.instance = new AlbumModel();