'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');
const Promise = require('bluebird');

class BandModel {

	getList () {

		return dataBase.find({docType: docTypes.BAND});
	}

	getBandById(id) {

		return dataBase.findOne({_id: id, docType: docTypes.BAND});
	}

    getBandAlbums (bandId) {

        return new Promise ((resolve, reject) => {
            this.getBandById(bandId)
                .then(band => {
                    const albumIds = band.albums;
                    return dataBase.find({_id: {$in: albumIds}, docType: docTypes.ALBUM});
                })
                .then(albums => resolve(albums))
                .catch(error => reject(error));
        });
    }
}

module.exports.BandModel = BandModel;
module.exports.instance = new BandModel();