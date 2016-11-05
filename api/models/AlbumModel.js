'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class AlbumModel {

    getList () {
        return dataBase.find({docType: docTypes.ALBUM})
    }
}
module.exports.AlbumModel = AlbumModel;
module.exports.instance = new AlbumModel();