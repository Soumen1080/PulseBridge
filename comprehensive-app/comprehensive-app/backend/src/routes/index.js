const express = require('express');
const IndexController = require('../controllers/index');

const router = express.Router();
const indexController = new IndexController();

function setRoutes(app) {
    router.post('/auth/login', indexController.login);
    router.post('/auth/register', indexController.register);
    router.post('/content/share', indexController.shareContent);
    router.post('/messages/send', indexController.sendMessage);
    router.get('/messages/:userId', indexController.getMessages);
    
    app.use('/api', router);
}

module.exports = setRoutes;