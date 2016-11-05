'use strict';

const debug = require('debug')('wrkshp:band-model');
const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class BandModel {

    getList () {
    	let bands = dataBase.find({docType: docTypes.BAND});
    	debug(bands);
        return bands;
    }

    getAlbums(id) {
    	let albums = dataBase.find({docType: docTypes.ALBUM});
    	debug(albums);
    	return albums;
    }
}

module.exports.BandModel = BandModel;
module.exports.instance = new BandModel();