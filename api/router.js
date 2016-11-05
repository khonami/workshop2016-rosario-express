const router = require('express').Router();
const colors = require('colors/safe');
const trackController = require('./controllers/TrackController').instance;
const bandController = require('./controllers/BandController').instance;

// Specific router middleware that shows the request timestamp
router.use((req, res, next) => {
    console.log(`${colors.green('Requesting: ')} ${req.method}  ${req.path}  -> Time: `, Date.now());
    next();
});

// API Routes
router.get('/tracks', trackController.getList);
router.get('/bands', bandController.getList);


module.exports = router;