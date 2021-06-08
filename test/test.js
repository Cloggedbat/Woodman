const woodD = require('../Server/Schema/woodData');
var assert = require('assert');
const { setMaxListeners } = require('../Server/Schema/woodData');
const mongoose = require('mongoose');

describe('Create records', () => {
    it('create a new user in db', () => {
        // assert(true)
        const shaws = new woodD({ name: "aj" })
        shaws.save()
            .then(() => {
                assert(!shaws.isNew)
            })
            .catch(() => {
                console.log("error1")
            })
    })
});
