'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class BandModel {

    getList () {
        return dataBase.find({docType: docTypes.BAND})
    }
}
module.exports.BandModel = BandModel;
module.exports.instance = new BandModel();