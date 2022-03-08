const express = require('express');
const homeController = require('../controller/home-controller');

// Creation du router de la zone "home"
const homeRouter = express.Router();

// Definition des routes

// Page d'accueil
homeRouter.get(['/', '/home','/index'],homeController.index);
homeRouter.get(['/home', '/index'],(req, res) => res.redirect())
// about
homeRouter.get('/about', homeController.about);
// contact
homeRouter.route('/contact',)
// .route est utiliser qu'on a plusieurs methode à traiter
    .get(homeController.contactGet)
    .post(homeController.contactPost);

    // Exportation
    module.exports = homeRouter;


