const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

// Right now the DB is connected to the local server, when I move to atlas this is where i will past the string to set up a off site DB 
mongoose.connect("mongodb://localhost/GotWood", { useNewUrlParser: true })

before(() => {
    mongoose.connection
        .once('open', () => {
            // console.log('Connected')
            done();
        })
        .on('error', (error) => {
            console.log('YOUR ERROR', error)
        });

});
beforeEach(done => {
    mongoose.connection.collections.wooddatas.drop(() => {
        console.log('drop done')
        done()
    })
});
