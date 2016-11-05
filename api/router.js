const router = require('express').Router();
const colors = require('colors/safe');
const trackController = require('./controllers/TrackController').instance;
const bandController = require('./controllers/BandController').instance;
const albumController = require('./controllers/AlbumController').instance;

// Specific router middleware that shows the request timestamp

// ## REMOVED MANUAL LOGGER // ADDED MORGAN AS IT'S ASYNC ##

// router.use((req, res, next) => {
//     console.log(`${colors.green('Requesting: ')} ${req.method}  ${req.path}  -> Time: `, Date.now());
//     next();
// });



// API Routes

// Tracks
router.get('/tracks', trackController.getList);
router.get('/tracks/:id/comments', trackController.getComments);
router.post('/tracks/:id/comments', trackController.addComment);

// Bands
router.get('/bands', bandController.getList);
router.get('/bands/:id', bandController.getBand);
router.get('/bands/:id/albums', bandController.getAlbums);
router.get('/bands/:id/artists', bandController.getArtists);

// Albums
router.get('/albums', albumController.getList);
router.get('/albums/:id', albumController.getAlbum);
router.get('/albums/:id/tracks', albumController.getTracks);

module.exports = router;