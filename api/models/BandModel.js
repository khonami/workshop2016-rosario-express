'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');
const Promise = require('bluebird');

class BandModel {

	getList () {

		return dataBase.find({docType: docTypes.BAND});
	}

	getBand(bandId) {

		return dataBase.findOne({_id: bandId, docType: docTypes.BAND});
	}

    getBandAlbums (bandId) {

        return new Promise ((resolve, reject) => {
            this.getBand(bandId)
                .then(band => {
                    const albumIds = band.albums;
                    return dataBase.find({_id: {$in: albumIds}, docType: docTypes.ALBUM});
                })
                .then(albums => resolve(albums))
                .catch(error => reject(error));
        });
    }

    getBandArtists (bandId) {

        return new Promise ((resolve, reject) => {
            this.getBand(bandId)
                .then(band => {
                    const artistsId = band.artists;
                    return dataBase.find({_id: {$in: artistsId}, docType: docTypes.ARTIST});
                })
                .then(artists => resolve(artists))
                .catch(error => reject(error));
        });
    }
}

module.exports.BandModel = BandModel;
module.exports.instance = new BandModel();