const express = require('express');
const yup = require('yup');
// Si  on ne met pas const express la page nbe reconnait pas express

const homeController = {
    
    /**
     * 
     * @param {express.Request} req 
     * @param {express.Request} res 
     */
    
    index:(req, res) => {
        res.render('home/index');
    },
    about:(req, res) => {
        const author = { firstname:"Ayan", lastname:"Abdi" };
        res.render('home/about', { 
            firstname: author.firstname,
            lastname: author.lastname
        });
    },
    contactGet:(req, res) => {
        const categories = ['frondend', 'backend','db'];
        res.render('home/contact', { categories});
    },
    contactPost:(req, res) => {
        // Recuperation des données envoyé par la requete post
        // Rappel: necessite le middleware express.urlEncoded(...)
        console.log(req.body);

        // Verification des données Post via yup
        // Création d'un schema de validation via "yup"
        const schemaBody = yup.object().shape({
            email:yup.string().required().email(),
            category: yup.string().required(),
            message: yup.string().required()
        });
        if (schemaBody.isValidSync(req.body)) {
            
            res.render('home/contact-response', { email: req.body.email });
        }
        else {
            res.redirect('/contact');
        }
        
    },
}




// Exportation du fichier
module.exports = homeController;